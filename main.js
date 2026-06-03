// LuxeBeauty PK — Main JS

document.addEventListener('DOMContentLoaded', function () {

  // ── Navbar scroll effect
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  // ── Mobile hamburger menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }

  // ── Filter chips
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', function () {
      const parent = this.closest('.filter-chips');
      if (parent) parent.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // ── Scroll fade-in observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.pillar, .testi-card, .rank-card, .city-card, .salon-card').forEach((el, i) => {
    el.classList.add('fade-up');
    el.style.transitionDelay = (i % 4) * 0.08 + 's';
    observer.observe(el);
  });

  // ── Search button (placeholder behaviour)
  const searchBtn = document.querySelector('.search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const query = document.querySelector('.search-input')?.value?.trim();
      const city  = document.querySelector('.search-select')?.value;
      if (!query && city === 'All Cities') {
        alert('Please enter a search term or select a city.');
        return;
      }
      // TODO: wire to real search endpoint
      console.log('Search:', query, city);
    });
  }

  // ── Sticky WhatsApp tooltip
  const stickyWa = document.querySelector('.sticky-wa');
  if (stickyWa) {
    stickyWa.setAttribute('title', 'Chat with us on WhatsApp');
  }

});
