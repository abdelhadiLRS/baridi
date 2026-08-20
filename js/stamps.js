/* ==========================================================================
   Algerian Stamps Encyclopedia - Stamps Utilities & Card Generator (js/stamps.js)
   ========================================================================== */

// Get all stamps including custom ones added in LocalStorage
async function getAllStamps() {
  const baseStamps = await fetchJSON('data/stamps.json') || [];
  const customStamps = JSON.parse(localStorage.getItem('baridi_custom_stamps') || '[]');
  return [...baseStamps, ...customStamps];
}

// Generate Stamp Card HTML
function createStampCardHTML(stamp) {
  const favorites = JSON.parse(localStorage.getItem('baridi_collection') || '[]');
  const isFav = favorites.includes(stamp.id);

  const title = currentLang === 'en' ? (stamp.title_en || stamp.title) :
               (currentLang === 'fr' ? (stamp.title_fr || stamp.title) : (stamp.title_ar || stamp.title));

  const category = stamp.category || '';
  const year = stamp.year || '';
  const denomination = stamp.denomination || '';
  const imgUrl = stamp.image || 'images/stamp-placeholder.png';

  return `
    <article class="stamp-card" data-id="${stamp.id}">
      <div class="stamp-card-img-wrap">
        <a href="stamp.html?id=${encodeURIComponent(stamp.id)}">
          <img src="${imgUrl}" alt="${title}" class="stamp-card-img" loading="lazy" onerror="this.src='images/stamp-placeholder.png';">
        </a>
      </div>
      <div class="stamp-card-content">
        <div class="stamp-card-meta">
          <span class="badge badge-primary">${year}</span>
          <span class="badge badge-gold">${denomination}</span>
        </div>
        <h3 class="stamp-card-title">
          <a href="stamp.html?id=${encodeURIComponent(stamp.id)}">${title}</a>
        </h3>
        <p class="stamp-card-desc">${stamp.description || ''}</p>
        <div class="stamp-card-actions">
          <a href="stamp.html?id=${encodeURIComponent(stamp.id)}" class="btn btn-sm btn-outline" data-i18n="btn_details">التفاصيل</a>
          <button type="button" class="btn-fav ${isFav ? 'active' : ''}" onclick="toggleFavorite('${stamp.id}', this)" title="إضافة للمفضلة">
            ${isFav ? '★' : '☆'}
          </button>
        </div>
      </div>
    </article>
  `;
}

// Toggle Favorite Status in LocalStorage
function toggleFavorite(id, btnElement) {
  let favorites = JSON.parse(localStorage.getItem('baridi_collection') || '[]');
  if (favorites.includes(id)) {
    favorites = favorites.filter(favId => favId !== id);
    if (btnElement) {
      btnElement.classList.remove('active');
      btnElement.innerHTML = '☆';
    }
  } else {
    favorites.push(id);
    if (btnElement) {
      btnElement.classList.add('active');
      btnElement.innerHTML = '★';
    }
  }
  localStorage.setItem('baridi_collection', JSON.stringify(favorites));
  updateCollectionCounter();
}
