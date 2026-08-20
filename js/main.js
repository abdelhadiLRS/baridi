/* ==========================================================================
   Algerian Stamps Encyclopedia - Main Core JS (js/main.js)
   RTL/LTR Translation, Header/Footer Injection, Favorites Counter, Nav Drawer
   ========================================================================== */

let currentLang = localStorage.getItem('baridi_lang') || 'ar';
let translations = {};

document.addEventListener('DOMContentLoaded', async () => {
  await initLanguage(currentLang);
  initMobileNav();
  updateCollectionCounter();
  highlightActiveNav();
});

// Initialize Language and i18n
async function initLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('baridi_lang', lang);

  // Set document direction & lang attributes
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }

  // Fetch translations file
  try {
    const res = await fetch(`data/translations/${lang}.json`);
    if (res.ok) {
      translations = await res.json();
      applyTranslations();
    }
  } catch (err) {
    console.error('Error loading translations:', err);
  }

  // Update language selector dropdown if present
  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    langSelect.value = lang;
    langSelect.onchange = (e) => initLanguage(e.target.value);
  }
}

// Apply translated texts to elements with data-i18n attribute
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) {
      if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
        el.placeholder = translations[key];
      } else {
        el.textContent = translations[key];
      }
    }
  });
}

// Mobile Navigation Toggle
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('mainNav');
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }
}

// Update Favorites Collection Counter Badge in Header
function updateCollectionCounter() {
  const favorites = JSON.parse(localStorage.getItem('baridi_collection') || '[]');
  const countEls = document.querySelectorAll('.collection-count-badge');
  countEls.forEach(el => {
    el.textContent = favorites.length;
    el.style.display = favorites.length > 0 ? 'inline-block' : 'none';
  });
}

// Highlight Active Link in Navigation Bar
function highlightActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Global Helper to Fetch Data
async function fetchJSON(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(`Error fetching ${url}:`, err);
    return null;
  }
}
