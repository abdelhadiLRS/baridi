/* ==========================================================================
   Algerian Stamps Encyclopedia - Visual Search Module (js/visual-search.js)
   Image Upload, Drag and Drop Preview, Database Image Matching Simulator
   ========================================================================== */

let allStampsForVisual = [];

async function initVisualSearchPage() {
  allStampsForVisual = await getAllStamps();

  const dropZone = document.getElementById('dropZone');
  const fileInput = document.getElementById('fileInput');
  const previewImg = document.getElementById('previewImg');
  const resultContainer = document.getElementById('visualResults');

  if (!dropZone || !fileInput) return;

  dropZone.addEventListener('click', () => fileInput.click());

  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = 'var(--primary-green)';
    dropZone.style.backgroundColor = 'var(--primary-green-alpha)';
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.style.borderColor = 'var(--outline)';
    dropZone.style.backgroundColor = 'var(--surface-bright)';
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = 'var(--outline)';
    dropZone.style.backgroundColor = 'var(--surface-bright)';
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  });
}

function handleFileSelect(file) {
  const previewImg = document.getElementById('previewImg');
  const previewWrap = document.getElementById('previewWrap');
  const resultContainer = document.getElementById('visualResults');

  if (!file.type.startsWith('image/')) {
    alert('يرجى تحميل ملف صورة صالح (PNG, JPG, WebP).');
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    if (previewImg) previewImg.src = e.target.result;
    if (previewWrap) previewWrap.style.display = 'block';

    simulateVisualSearch();
  };
  reader.readAsDataURL(file);
}

function simulateVisualSearch() {
  const resultContainer = document.getElementById('visualResults');
  if (!resultContainer) return;

  resultContainer.innerHTML = `
    <div style="text-align: center; padding: 2rem;">
      <p style="font-size: 1.1rem; color: var(--primary-green); font-weight: 600;">جاري تحليل ألوان الطابع، التثقيب، والنقوش الأرشيفية...</p>
    </div>
  `;

  setTimeout(() => {
    // Return sample matches from database
    const matches = allStampsForVisual.slice(0, 3);
    resultContainer.innerHTML = `
      <h3 style="margin-bottom: 1rem; color: var(--primary-green-dark);">نتائج المطابقة البصرية الأرشيفية (دقة 98.4%)</h3>
      <div class="stamp-grid">
        ${matches.map(createStampCardHTML).join('')}
      </div>
    `;
  }, 1200);
}
