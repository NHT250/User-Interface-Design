document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  const navbar = document.getElementById("mainNav");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      event.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });

      const navbarCollapseEl = document.querySelector(".navbar-collapse");
      if (navbarCollapseEl && navbarCollapseEl.classList.contains("show")) {
        const bsCollapse =
          bootstrap.Collapse.getInstance(navbarCollapseEl) ||
          new bootstrap.Collapse(navbarCollapseEl, { toggle: false });
        bsCollapse.hide();
      }
    });
  });

  const handleNavShadow = () => {
    if (!navbar) return;
    navbar.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  handleNavShadow();
  window.addEventListener("scroll", handleNavShadow);

  const contactForm = document.getElementById("contactForm");
  const formAlert = document.getElementById("formAlert");
  const emailInput = document.getElementById("email");

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

  const setFieldState = (field, valid) => {
    field.classList.toggle("is-valid", valid);
    field.classList.toggle("is-invalid", !valid);
  };

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formAlert.innerHTML = "";

    const requiredFields = Array.from(contactForm.querySelectorAll("[required]"));
    let formIsValid = true;

    requiredFields.forEach((field) => {
      const value = field.value.trim();
      let valid = value !== "";

      if (field === emailInput) {
        valid = valid && isEmailValid(value);
      }

      setFieldState(field, valid);
      if (!valid) formIsValid = false;
    });

    if (!formIsValid) return;

    formAlert.innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        Message sent successfully! Our team will contact you shortly.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;

    contactForm.reset();
    requiredFields.forEach((field) => {
      field.classList.remove("is-valid", "is-invalid");
    });
  });
});