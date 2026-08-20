/* ==========================================================================
   Algerian Stamps Encyclopedia - Personal Collection Manager (js/collection.js)
   LocalStorage Saved Favorites Grid
   ========================================================================== */

async function initCollectionPage() {
  const container = document.getElementById('collectionGrid');
  const countEl = document.getElementById('collectionCount');
  if (!container) return;

  const favorites = JSON.parse(localStorage.getItem('baridi_collection') || '[]');
  const allStamps = await getAllStamps();

  const userStamps = allStamps.filter(stamp => favorites.includes(stamp.id));

  if (countEl) {
    countEl.textContent = userStamps.length;
  }

  if (userStamps.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-state-icon">⭐</div>
        <h3 class="empty-state-title">مجموعتك الشخصية فارغة</h3>
        <p>يمكنك تصفح الموسوعة وإضافة الطوابع إلى مفضلتك عبر الضغط على أيقونة النجمة (★).</p>
        <a href="stamps.html" class="btn btn-primary" style="margin-top: 1rem;">استكشف الموسوعة</a>
      </div>
    `;
    return;
  }

  container.innerHTML = userStamps.map(createStampCardHTML).join('');
}
