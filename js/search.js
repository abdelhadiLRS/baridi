/* ==========================================================================
   Algerian Stamps Encyclopedia - Search & Filter Engine (js/search.js)
   Real-Time Filter, Multi-Attribute Querying, Search Highlighting
   ========================================================================== */

let allStampsList = [];

async function initSearchPage() {
  allStampsList = await getAllStamps();

  // Populate filter dropdowns dynamically
  populateFilterDropdowns();

  // Attach search listeners
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  const yearFilter = document.getElementById('yearFilter');
  const seriesFilter = document.getElementById('seriesFilter');
  const sortSelect = document.getElementById('sortSelect');

  if (searchInput) searchInput.addEventListener('input', renderFilteredStamps);
  if (categoryFilter) categoryFilter.addEventListener('change', renderFilteredStamps);
  if (yearFilter) yearFilter.addEventListener('change', renderFilteredStamps);
  if (seriesFilter) seriesFilter.addEventListener('change', renderFilteredStamps);
  if (sortSelect) sortSelect.addEventListener('change', renderFilteredStamps);

  // Check query string parameters e.g., ?q=1962 or ?category=sports
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('q') && searchInput) searchInput.value = urlParams.get('q');
  if (urlParams.has('category') && categoryFilter) categoryFilter.value = urlParams.get('category');
  if (urlParams.has('year') && yearFilter) yearFilter.value = urlParams.get('year');
  if (urlParams.has('series') && seriesFilter) seriesFilter.value = urlParams.get('series');

  renderFilteredStamps();
}

function populateFilterDropdowns() {
  const categoryFilter = document.getElementById('categoryFilter');
  const yearFilter = document.getElementById('yearFilter');
  const seriesFilter = document.getElementById('seriesFilter');

  if (categoryFilter) {
    const categories = [...new Set(allStampsList.map(s => s.category).filter(Boolean))];
    categories.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat;
      opt.textContent = cat;
      categoryFilter.appendChild(opt);
    });
  }

  if (yearFilter) {
    const years = [...new Set(allStampsList.map(s => s.year).filter(Boolean))].sort((a,b) => b - a);
    years.forEach(y => {
      const opt = document.createElement('option');
      opt.value = y;
      opt.textContent = y;
      yearFilter.appendChild(opt);
    });
  }

  if (seriesFilter) {
    const seriesList = [...new Set(allStampsList.map(s => s.series).filter(Boolean))];
    seriesList.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s;
      opt.textContent = s;
      seriesFilter.appendChild(opt);
    });
  }
}

function renderFilteredStamps() {
  const container = document.getElementById('stampsGrid');
  const countEl = document.getElementById('resultsCount');
  if (!container) return;

  const query = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
  const catVal = document.getElementById('categoryFilter')?.value || '';
  const yearVal = document.getElementById('yearFilter')?.value || '';
  const seriesVal = document.getElementById('seriesFilter')?.value || '';
  const sortVal = document.getElementById('sortSelect')?.value || 'year_desc';

  let filtered = allStampsList.filter(stamp => {
    // Search text match across all fields
    const fullText = `${stamp.title} ${stamp.title_ar||''} ${stamp.title_en||''} ${stamp.title_fr||''} ${stamp.year||''} ${stamp.denomination||''} ${stamp.series||''} ${stamp.category||''} ${stamp.designer||''} ${stamp.description||''} ${stamp.historical_context||''} ${(stamp.tags||[]).join(' ')}`.toLowerCase();
    const matchQuery = !query || fullText.includes(query);

    const matchCategory = !catVal || stamp.category === catVal;
    const matchYear = !yearVal || String(stamp.year) === String(yearVal);
    const matchSeries = !seriesVal || stamp.series === seriesVal;

    return matchQuery && matchCategory && matchYear && matchSeries;
  });

  // Sorting
  if (sortVal === 'year_desc') {
    filtered.sort((a,b) => (b.year || 0) - (a.year || 0));
  } else if (sortVal === 'year_asc') {
    filtered.sort((a,b) => (a.year || 0) - (b.year || 0));
  } else if (sortVal === 'title') {
    filtered.sort((a,b) => (a.title || '').localeCompare(b.title || ''));
  }

  if (countEl) {
    countEl.textContent = filtered.length;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-state-icon">🔍</div>
        <h3 class="empty-state-title">لم يتم العثور على نتائج</h3>
        <p>جرب البحث بكلمات أخرى أو تغيير الفلاتر المحددة.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(createStampCardHTML).join('');
}
