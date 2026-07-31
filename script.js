tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["Geist", "sans-serif"],
      },
      colors: {
        ink: "#0b0d12",
        panel: "#11141b",
        line: "#232836",
        soft: "#9aa3b5",
        pink: "#dd7bbb",
        gold: "#d79f1e",
        leaf: "#5a922c",
        sea: "#4c7894",
      },
    },
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("campusTable");
  const search = document.getElementById("campusSearch");
  const modal = document.getElementById("campusModal");
  const close = document.getElementById("closeModal");

  // ==========================
  // RENDER DATA
  // ==========================

  function render(data, limit = null) {
    container.innerHTML = "";

    const list = limit ? data.slice(0, limit) : data;

    list.forEach((item) => {
      container.innerHTML += `
                <a
                    href="${item.link}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex justify-between items-center p-5 hover:bg-white/5 transition border-b border-white/10 last:border-b-0">

                    <div>

                        <div class="text-pink font-semibold text-sm md:text-base">
                            ${item.kode}
                        </div>

                        <div class="text-white mt-1 text-sm md:text-base">
                            ${item.nama}
                        </div>

                    </div>

                    <i data-lucide="arrow-right" class="w-5 h-5 text-soft"></i>

                </a>
            `;
    });

    if (window.lucide) {
      lucide.createIcons();
    }
  }

  // ==========================
  // TAMPIL AWAL (5 DATA)
  // ==========================

  render(kampus, 5);

  // ==========================
  // SEARCH
  // ==========================

  search.addEventListener("input", function () {
    const keyword = this.value.toLowerCase().trim();

    // Jika kosong tampilkan 5 kampus
    if (keyword === "") {
      render(kampus, 5);

      modal.classList.add("hidden");
      modal.classList.remove("flex");

      return;
    }

    // Filter
    const hasil = kampus.filter((item) => {
      return (
        item.nama.toLowerCase().includes(keyword) ||
        item.kode.toLowerCase().includes(keyword)
      );
    });

    // Jika tidak ada hasil
    if (hasil.length === 0) {
      render([]);

      modal.classList.remove("hidden");
      modal.classList.add("flex");
    } else {
      modal.classList.add("hidden");
      modal.classList.remove("flex");

      render(hasil);
    }
  });

  // ==========================
  // TUTUP MODAL
  // ==========================

  close.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");

    search.value = "";

    render(kampus, 5);
  });

  // ==========================
  // KLIK AREA LUAR MODAL
  // ==========================

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");

      search.value = "";

      render(kampus, 5);
    }
  });
});
const orderSection = document.getElementById("order-section");
const openOrder = document.getElementById("openOrder");

openOrder.addEventListener("click", () => {
  orderSection.classList.remove("hidden");

  setTimeout(() => {
    orderSection.classList.remove("opacity-0", "translate-y-10");
  }, 50);

  orderSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
const templateButtons = document.querySelectorAll(".template-btn");

const preview = document.getElementById("previewVideo");

const source = document.getElementById("previewSource");

const title = document.getElementById("selectedTemplate");

templateButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    templateButtons.forEach((item) => item.classList.remove("active"));

    btn.classList.add("active");

    source.src = btn.dataset.video;

    preview.load();

    preview.play();

    title.innerHTML = "Template " + btn.dataset.template;
  });
});
