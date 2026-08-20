/* ==========================================================================
   Algerian Stamps Encyclopedia - Stamp Details Page JS (js/stamp-details.js)
   HD Zoom, Metadata Renderer, Social Share, Related Stamps
   ========================================================================== */

async function initStampDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const stampId = urlParams.get('id');

  if (!stampId) {
    showError('لم يتم تحديد رمز الطابع المطلوبة.');
    return;
  }

  const allStamps = await getAllStamps();
  const stamp = allStamps.find(s => s.id === stampId);

  if (!stamp) {
    showError('عذراً، لم يتم العثور على هذا الطابع في الأرشيف.');
    return;
  }

  // Set Page Title
  document.title = `${stamp.title} | موسوعة الطوابع الجزائرية`;

  // Render Primary Stamp Info
  renderStampHeaderAndSpecs(stamp);

  // Render Image & Zoom Container
  renderStampImage(stamp);

  // Render Related Stamps
  renderRelatedStamps(stamp, allStamps);

  // Initialize Favorite Toggle State
  initFavBtnState(stamp);
}

function renderStampHeaderAndSpecs(stamp) {
  const titleEl = document.getElementById('stampTitle');
  const descEl = document.getElementById('stampDesc');
  const historyEl = document.getElementById('stampHistory');
  const breadcrumbTitle = document.getElementById('breadcrumbTitle');

  if (titleEl) titleEl.textContent = stamp.title;
  if (breadcrumbTitle) breadcrumbTitle.textContent = stamp.title;
  if (descEl) descEl.textContent = stamp.description || 'لا يوجد وصف مختصر متوفر.';
  if (historyEl) historyEl.textContent = stamp.historical_context || 'المعلومات التاريخية متطابقة مع أرشيف بريد الجزائر الرسمي.';

  // Spec Fields Mapping
  const specs = [
    { label: 'سنة الإصدار', val: stamp.year },
    { label: 'تاريخ الإصدار', val: stamp.issue_date },
    { label: 'القيمة الاسمية', val: stamp.denomination },
    { label: 'السلسلة البريدية', val: stamp.series },
    { label: 'التصنيف الرئيسية', val: stamp.category },
    { label: 'مصمم الطابع', val: stamp.designer },
    { label: 'المطبعة', val: stamp.printer },
    { label: 'الأبعاد', val: stamp.dimensions },
    { label: 'التثقيب', val: stamp.perforation },
    { label: 'ولاية ذات صلة', val: stamp.wilaya }
  ];

  const specGrid = document.getElementById('specGrid');
  if (specGrid) {
    specGrid.innerHTML = specs.map(s => `
      <div class="spec-item">
        <div class="spec-label">${s.label}</div>
        <div class="spec-value">${s.val || 'غير محدد'}</div>
      </div>
    `).join('');
  }
}

function renderStampImage(stamp) {
  const zoomContainer = document.getElementById('zoomContainer');
  const zoomImg = document.getElementById('zoomImg');

  if (zoomImg) {
    zoomImg.src = stamp.image;
    zoomImg.alt = stamp.title;
  }

  if (zoomContainer) {
    zoomContainer.addEventListener('click', () => {
      zoomContainer.classList.toggle('active');
    });
  }
}

function initFavBtnState(stamp) {
  const favBtn = document.getElementById('favDetailBtn');
  if (!favBtn) return;

  const favorites = JSON.parse(localStorage.getItem('baridi_collection') || '[]');
  const isFav = favorites.includes(stamp.id);

  updateFavBtnUI(favBtn, isFav);

  favBtn.onclick = () => {
    toggleFavorite(stamp.id);
    const updatedFavs = JSON.parse(localStorage.getItem('baridi_collection') || '[]');
    updateFavBtnUI(favBtn, updatedFavs.includes(stamp.id));
  };
}

function updateFavBtnUI(btn, isFav) {
  if (isFav) {
    btn.innerHTML = '★ في مجموعتي المفضلة';
    btn.className = 'btn btn-gold';
  } else {
    btn.innerHTML = '☆ إضافة إلى مجموعتي';
    btn.className = 'btn btn-outline';
  }
}

function renderRelatedStamps(currentStamp, allStamps) {
  const container = document.getElementById('relatedStampsGrid');
  if (!container) return;

  const related = allStamps.filter(s => s.id !== currentStamp.id && (s.category === currentStamp.category || s.series === currentStamp.series)).slice(0, 3);

  if (related.length === 0) {
    container.innerHTML = '<p>لا توجد طوابع مشابهة متوفرة حالياً.</p>';
    return;
  }

  container.innerHTML = related.map(createStampCardHTML).join('');
}

// Web Share API or Copy Link
function shareStamp() {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      url: window.location.href
    }).catch(err => console.log('Error sharing:', err));
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert('تم نسخ رابط الطابع إلى المحفظة بنجاح!');
  }
}

function showError(msg) {
  const main = document.querySelector('main');
  if (main) {
    main.innerHTML = `
      <div class="container">
        <div class="empty-state">
          <div class="empty-state-icon">⚠️</div>
          <h3 class="empty-state-title">${msg}</h3>
          <a href="stamps.html" class="btn btn-primary" style="margin-top: 1rem;">العودة إلى الموسوعة</a>
        </div>
      </div>
    `;
  }
}
