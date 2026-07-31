function showError(inputId, errorId, message) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);

  if (!input || !error) return;

  input.classList.add("border-red-500");

  error.textContent = message;
  error.classList.remove("hidden");
}

function clearError(inputId, errorId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);

  if (!input || !error) return;

  input.classList.remove("border-red-500");

  error.textContent = "";
  error.classList.add("hidden");
}

/* ==========================================
VALIDATE STEP
========================================== */

function validateStep(step) {
  switch (step) {
    case 1:
      return validateStep1();

    case 2:
      return validateStep2();

    case 3:
      return true;

    case 4:
      return validateStep4();

    default:
      return true;
  }
}

/* ==========================================
STEP 1
========================================== */

function validateStep1() {
  let valid = true;

  const paket = document.getElementById("paket");
  const nama = document.getElementById("nama");
  const kampus = document.getElementById("kampus");

  clearError("paket", "paketError");
  clearError("nama", "namaError");
  clearError("kampus", "kampusError");

  if (!paket || paket.value.trim() === "") {
    showError("paket", "paketError", "Silakan pilih paket.");

    valid = false;
  }
  if (!nama || nama.value.trim() === "") {
    showError("nama", "namaError", "Nama customer wajib diisi.");

    valid = false;
  }

  if (!kampus || kampus.value.trim() === "") {
    showError("kampus", "kampusError", "Kampus / Company wajib diisi.");

    valid = false;
  }

  return valid;
}

/* ==========================================
STEP 2
========================================== */

function validateStep2() {
  const error = document.getElementById("templateError");

  if (selectedTemplate) {
    if (error) error.classList.add("hidden");

    return true;
  }

  if (error) {
    error.classList.remove("hidden");

    error.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return false;
}

/* ==========================================
STEP 4
========================================== */

function validateStep4() {
  const agree = document.getElementById("agreeTerms");

  if (!agree) return false;

  return agree.checked;
}

/* ==========================================
REALTIME CLEAR ERROR
========================================== */

const validationFields = [
  {
    input: "paket",
    error: "paketError",
  },

  {
    input: "nama",
    error: "namaError",
  },

  {
    input: "kampus",
    error: "kampusError",
  },
];

validationFields.forEach((field) => {
  const element = document.getElementById(field.input);

  if (!element) return;

  const handler = () => {
    clearError(field.input, field.error);
  };

  element.addEventListener("input", handler);
  element.addEventListener("change", handler);
});

/* ==========================================
CHECKBOX Template
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  const agree = document.getElementById("agreeTerms");
  const checkout = document.getElementById("checkoutBtn");

  if (!agree || !checkout) return;

  checkout.disabled = true;
  checkout.classList.add("opacity-50", "cursor-not-allowed");

  agree.addEventListener("change", () => {
    checkout.disabled = !agree.checked;

    checkout.classList.toggle("opacity-50", !agree.checked);

    checkout.classList.toggle("cursor-not-allowed", !agree.checked);
  });
});
/* ==========================================
CHECKBOX Joki
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  const agree = document.getElementById("agreeTerms");
  const checkoutjoki = document.getElementById("checkoutBtnJoki");

  if (!agree || !checkoutjoki) return;

  checkoutjoki.disabled = true;
  checkoutjoki.classList.add("opacity-50", "cursor-not-allowed");

  agree.addEventListener("change", () => {
    checkoutjoki.disabled = !agree.checked;

    checkoutjoki.classList.toggle("opacity-50", !agree.checked);

    checkoutjoki.classList.toggle("cursor-not-allowed", !agree.checked);
  });
});
