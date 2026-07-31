
let currentStep = 1;
const totalStep = 4;

const steps = document.querySelectorAll(".wizard-step");
const progressFill = document.getElementById("progressFill");

const indicators = [
  document.getElementById("indicator1"),
  document.getElementById("indicator2"),
  document.getElementById("indicator3"),
  document.getElementById("indicator4"),
];

/* ==========================================
SHOW STEP
========================================== */

function showStep(step) {
  steps.forEach((section) => {
    section.classList.add("hidden");
    section.classList.remove("active");
  });

  const activeStep = document.getElementById(`step${step}`);

  activeStep.classList.remove("hidden");

  requestAnimationFrame(() => {
    activeStep.classList.add("active");
  });

  currentStep = step;

  updateProgress();
}

/* ==========================================
NEXT
========================================== */

function nextStep() {
  // validation.js
  if (typeof validateStep === "function") {
    if (!validateStep(currentStep)) {
      return;
    }
  }

  // summary.js
  if (currentStep === 2) {
    if (typeof updateSummary === "function") {
      updateSummary();
    }
  }

  if (currentStep === 3) {
    if (typeof updateCheckoutSummary === "function") {
      updateCheckoutSummary();
    }
  }

  if (currentStep >= totalStep) return;

  animateStep(currentStep, currentStep + 1);
}

/* ==========================================
BACK
========================================== */

function prevStep() {
  if (currentStep <= 1) return;

  animateStep(currentStep, currentStep - 1);
}

/* ==========================================
ANIMATION
========================================== */

function animateStep(from, to) {
  const current = document.getElementById(`step${from}`);

  current.classList.remove("active");
  current.classList.add("fade-out");

  setTimeout(() => {
    current.classList.add("hidden");
    current.classList.remove("fade-out");

    showStep(to);
  }, 300);
}

/* ==========================================
PROGRESS
========================================== */

function updateProgress() {
  const percent = (currentStep / totalStep) * 100;

  progressFill.style.width = `${percent}%`;

  indicators.forEach((item, index) => {
    const number = index + 1;

    item.classList.remove("active", "completed");

    if (number < currentStep) {
      item.classList.add("completed");
    } else if (number === currentStep) {
      item.classList.add("active");
    }
  });
}

/* ==========================================
BUTTONS
========================================== */
next1?.addEventListener("click", nextStep);
next2?.addEventListener("click", nextStep);
next3?.addEventListener("click", nextStep);

back2?.addEventListener("click", prevStep);
back3?.addEventListener("click", prevStep);
back4?.addEventListener("click", prevStep);

/* ==========================================
INIT
========================================== */

window.addEventListener("DOMContentLoaded", () => {
  showStep(1);
});
