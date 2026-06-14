// ===== ГАМБУРГЕР МЕНЮ =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');
    hamburger.classList.toggle('is-active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
  });

  // Закрити меню при кліку на посилання
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  });

  // Закрити меню при кліку поза ним
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('is-open');
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    }
  });
}

// ===== ДРОПДАУН ДЕСКТОП =====
document.querySelectorAll('.nav__dropdown-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    // Закрити всі інші
    document.querySelectorAll('.nav__dropdown-btn').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
    });
    btn.setAttribute('aria-expanded', !isExpanded);
  });
});

// Закрити дропдаун при кліку поза
document.addEventListener('click', () => {
  document.querySelectorAll('.nav__dropdown-btn').forEach(btn => {
    btn.setAttribute('aria-expanded', 'false');
  });
});

// ===== ДРОПДАУН МОБІЛЬНЕ МЕНЮ =====
document.querySelectorAll('.mobile-menu__dropdown-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const submenu = btn.nextElementSibling;
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !isExpanded);
    if (submenu) submenu.hidden = isExpanded;
  });
});

// ===== ФОРМА ЗАЯВКИ =====
function handleSubmit() {
  const name = document.getElementById('name')?.value.trim();
  const phone = document.getElementById('phone')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const specialty = document.getElementById('specialty')?.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[\d\s\-()]{10,}$/;

  if (!name || !phone || !specialty) {
    alert('Будь ласка, заповніть обов\'язкові поля: ім\'я, телефон та спеціальність.');
    return;
  }
  if (email && !emailRegex.test(email)) {
    alert('Введіть коректний email.');
    return;
  }
  if (!phoneRegex.test(phone)) {
    alert('Введіть коректний номер телефону.');
    return;
  }

  const successMsg = document.getElementById('application-success');
  if (successMsg) {
    successMsg.hidden = false;
    successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// ===== ПЛАВНИЙ СКРОЛ =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

