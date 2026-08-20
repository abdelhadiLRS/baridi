/* ==========================================================================
   Algerian Stamps Encyclopedia - Admin & Content Management JS (js/admin.js)
   Real Statistics Calculation, Stamp CRUD, LocalStorage Persistence
   ========================================================================== */

async function initAdminDashboard() {
  const allStamps = await getAllStamps();

  // Calculate Real Statistics from database
  calculateRealStats(allStamps);

  // Render Admin Stamps Management Table
  renderAdminTable(allStamps);

  // Attach Form Handler for Adding New Stamp
  initAddStampForm();
}

function calculateRealStats(stamps) {
  const totalStamps = stamps.length;

  const years = [...new Set(stamps.map(s => s.year).filter(Boolean))];
  const categories = [...new Set(stamps.map(s => s.category).filter(Boolean))];
  const series = [...new Set(stamps.map(s => s.series).filter(Boolean))];

  const statStamps = document.getElementById('statTotalStamps');
  const statYears = document.getElementById('statTotalYears');
  const statCategories = document.getElementById('statTotalCategories');
  const statSeries = document.getElementById('statTotalSeries');

  if (statStamps) statStamps.textContent = totalStamps;
  if (statYears) statYears.textContent = years.length;
  if (statCategories) statCategories.textContent = categories.length;
  if (statSeries) statSeries.textContent = series.length;
}

function renderAdminTable(stamps) {
  const tableBody = document.getElementById('adminTableBody');
  if (!tableBody) return;

  if (stamps.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="6" style="text-align: center;">لا توجد طوابع مسجلة حالياً.</td></tr>';
    return;
  }

  tableBody.innerHTML = stamps.map(s => `
    <tr>
      <td><img src="${s.image}" style="width: 40px; height: 40px; object-fit: contain; border-radius: 4px; border: 1px solid var(--border-subtle);"></td>
      <td><strong>${s.title}</strong></td>
      <td>${s.year || '-'}</td>
      <td><span class="badge badge-gold">${s.denomination || '-'}</span></td>
      <td><span class="badge badge-primary">${s.category || '-'}</span></td>
      <td>
        <a href="stamp.html?id=${s.id}" class="btn btn-sm btn-outline">معاينة</a>
        <button type="button" class="btn btn-sm btn-danger" onclick="deleteCustomStamp('${s.id}')">حذف</button>
      </td>
    </tr>
  `).join('');
}

function initAddStampForm() {
  const form = document.getElementById('addStampForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('stampTitleInput').value.trim();
    const year = parseInt(document.getElementById('stampYearInput').value.trim());
    const denom = document.getElementById('stampDenomInput').value.trim();
    const category = document.getElementById('stampCategoryInput').value.trim();
    const series = document.getElementById('stampSeriesInput').value.trim();
    const designer = document.getElementById('stampDesignerInput').value.trim();
    const imgUrl = document.getElementById('stampImageInput').value.trim() || 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_V5G1_J6bJJn22nOnECiomkQyLxAqQOEBJsAolj0FiBcr-6pTwNkfQjI7JKSl15-ztHzeZxR-T3z9oI9GeIrI_WpDeRJ49UXgHTBwJ637WUF1iucyUaV594Fxk2LQ3_jst_WafyRagmYZci6OTPLfjIuV3C_rz_xkIIBlA5xv1qmbYAghY9kwdxNgK78AicU_t1DyTRbl6KM81wumfg3pKGGjXlOYgqCQBHVMOz5uA3BZZI1bibds';
    const desc = document.getElementById('stampDescInput').value.trim();

    const newStamp = {
      id: `custom-${Date.now()}`,
      title,
      year,
      denomination: denom,
      category,
      series,
      designer,
      image: imgUrl,
      description: desc,
      historical_context: desc,
      featured: false
    };

    let customStamps = JSON.parse(localStorage.getItem('baridi_custom_stamps') || '[]');
    customStamps.push(newStamp);
    localStorage.setItem('baridi_custom_stamps', JSON.stringify(customStamps));

    alert('تمت إضافة الطابع الجديد بنجاح إلى الأرشيف المحلي!');
    form.reset();
    initAdminDashboard();
  });
}

function deleteCustomStamp(id) {
  if (!confirm('هل أنت تأكد من رغبتك في أرشفة/حذف هذا الطابع من السجل المحلي؟')) return;

  let customStamps = JSON.parse(localStorage.getItem('baridi_custom_stamps') || '[]');
  customStamps = customStamps.filter(s => s.id !== id);
  localStorage.setItem('baridi_custom_stamps', JSON.stringify(customStamps));

  initAdminDashboard();
}
