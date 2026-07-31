function getValue(id, fallback = "-") {
  const el = document.getElementById(id);

  if (!el) return fallback;

  const value = el.value.trim();

  return value === "" ? fallback : value;
}

/* ==========================================
UPDATE STEP 3
========================================== */

function updateSummary() {
  // Informasi Pemesan

  document.getElementById("reviewNama").textContent = getValue("nama");

  document.getElementById("reviewKampus").textContent = getValue("kampus");

  // Detail Pesanan

  document.getElementById("reviewPaket").textContent = getValue("paket");

  document.getElementById("reviewProduk").textContent = getValue("produk");

  document.getElementById("reviewTemplate").textContent =
    selectedTemplate || "-";

  // Catatan

  const catatan = document.getElementById("catatan").value.trim();

  document.getElementById("reviewCatatan").textContent =
    catatan === "" ? "Tidak ada catatan." : catatan;
}

/* ==========================================
UPDATE STEP 4
========================================== */

function updateCheckoutSummary() {
  document.getElementById("checkoutNama").textContent = getValue("nama");

  document.getElementById("checkoutPaket").textContent = getValue("paket");

  document.getElementById("checkoutProduk").textContent = getValue("produk");

  document.getElementById("checkoutTemplate").textContent =
    selectedTemplate || "-";
}

/* ==========================================
UPDATE SEMUA
========================================== */

function refreshSummary() {
  updateSummary();

  updateCheckoutSummary();
}

/* ==========================================
REALTIME UPDATE
========================================== */

["nama", "kampus", "paket", "materi", "produk", "catatan"].forEach((id) => {
  const element = document.getElementById(id);

  if (!element) return;

  element.addEventListener("input", refreshSummary);

  element.addEventListener("change", refreshSummary);
});

/* ==========================================
AUTO UPDATE SAAT TEMPLATE BERUBAH
========================================== */

const observer = new MutationObserver(() => {
  refreshSummary();
});

const templateBadge = document.getElementById("selectedTemplateText");

if (templateBadge) {
  observer.observe(templateBadge, {
    childList: true,
  });
}

/* ==========================================
INIT
========================================== */

window.addEventListener("DOMContentLoaded", () => {
  refreshSummary();
});
