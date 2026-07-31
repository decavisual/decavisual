/*
====================================================
Decavisual Template Selection
====================================================
*/

// Global agar bisa dipakai validation.js, summary.js, checkout.js
window.selectedTemplate = null;

const templateCards = document.querySelectorAll(".template-card");

const previewVideo = document.getElementById("previewVideo");
const previewSource = previewVideo
    ? previewVideo.querySelector("source")
    : null;

const badge = document.getElementById("selectedTemplateBadge");
const badgeText = document.getElementById("selectedTemplateText");

const summaryNama = document.getElementById("summaryNama");
const summaryProduk = document.getElementById("summaryProduk");
const summaryPaket = document.getElementById("summaryPaket");
const summaryTemplate = document.getElementById("summaryTemplate");

const templateError = document.getElementById("templateError");

/* ==========================================
UPDATE SUMMARY SEMENTARA
========================================== */

function updateTemporarySummary() {

    if (summaryNama) {

        summaryNama.textContent =
            document.getElementById("nama")?.value || "-";

    }

    if (summaryProduk) {

        summaryProduk.textContent =
            document.getElementById("produk")?.value || "-";

    }

    if (summaryPaket) {

        summaryPaket.textContent =
            document.getElementById("paket")?.value || "-";

    }

    if (summaryTemplate) {

        summaryTemplate.textContent =
            window.selectedTemplate || "Belum dipilih";

    }

}

/* ==========================================
PILIH TEMPLATE
========================================== */

templateCards.forEach(card => {

    card.addEventListener("click", () => {

        // Hilangkan active sebelumnya

        templateCards.forEach(item => {

            item.classList.remove("active");

        });

        // Active baru

        card.classList.add("active");

        // Simpan template global

        window.selectedTemplate = card.dataset.template;

        // Badge

        if (badge) {

            badge.classList.remove("hidden");

        }

        if (badgeText) {

            badgeText.textContent = window.selectedTemplate;

        }

        // Preview Video

        if (previewSource && previewVideo) {

            previewSource.src = card.dataset.video;

            previewVideo.load();

            previewVideo.play().catch(() => {});

        }

        // Hilangkan error

        if (templateError) {

            templateError.classList.add("hidden");

        }

        // Update Ringkasan

        updateTemporarySummary();

        if (typeof refreshSummary === "function") {

            refreshSummary();

        }

    });

});

/* ==========================================
REALTIME UPDATE
========================================== */

["nama", "paket", "produk"].forEach(id => {

    const input = document.getElementById(id);

    if (!input) return;

    input.addEventListener("input", updateTemporarySummary);

    input.addEventListener("change", updateTemporarySummary);

});

/* ==========================================
INIT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    updateTemporarySummary();

});