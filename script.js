// Navigation Menu

const hamburgerBtn = document.getElementById("hamburger-btn");
const navLinks = document.querySelector(".hidden.sm\\:block");

hamburgerBtn.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
});

// Registration and Sign Up
function toggleForm(formName) {
  var forms = document.querySelectorAll(".auth-form");

  forms.forEach(function (form) {
    if (form.id === formName) {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  });
}

const policySwitch = document.getElementById("policy-switch");
const switchLabel = document.getElementById("switch-1-label");

policySwitch.addEventListener("click", () => {
  const checked = policySwitch.getAttribute("aria-checked") === "true";
  policySwitch.setAttribute("aria-checked", !checked);
  switchLabel.textContent = `By selecting this, you agree to our ${
    checked ? "" : "privacy "
  }policy.`;
});
