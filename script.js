document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });
  }

  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name === '' || email === '' || message === '') {
        formFeedback.className = 'form-feedback';
        formFeedback.style.color = '#ef4444';
        formFeedback.textContent = 'Please fill out all the fields.';
        formFeedback.classList.remove('hidden');
        return;
      }

      formFeedback.className = 'form-feedback success';
      formFeedback.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
      formFeedback.classList.remove('hidden');

      contactForm.reset();

      setTimeout(() => {
        formFeedback.classList.add('hidden');
      }, 5000);
    });
  }
});
