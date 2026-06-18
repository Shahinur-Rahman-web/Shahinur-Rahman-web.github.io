// Shared behavior for every page: mobile nav toggle, dropdown menus, in-page tabs.
document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile nav open/close ---
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.querySelector('.main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
  }

  // --- Dropdown menus (Background / Skills / Others) ---
  document.querySelectorAll('.dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const li = btn.closest('.has-dropdown');
      const isOpen = li.classList.contains('open');
      document.querySelectorAll('.has-dropdown.open').forEach(other => {
        if (other !== li) {
          other.classList.remove('open');
          other.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
        }
      });
      li.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });
  document.addEventListener('click', () => {
    document.querySelectorAll('.has-dropdown.open').forEach(li => {
      li.classList.remove('open');
      li.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
    });
  });

  // --- In-page tabs (used on background.html, skills.html, others.html) ---
  document.querySelectorAll('.tabs').forEach(tabGroup => {
    const buttons = tabGroup.querySelectorAll('.tab-btn');
    const panels = tabGroup.querySelectorAll('.tab-panel');

    function activate(id) {
      buttons.forEach(b => {
        const on = b.dataset.tab === id;
        b.classList.toggle('active', on);
        b.setAttribute('aria-selected', String(on));
      });
      panels.forEach(p => { p.hidden = (p.id !== id); });
    }

    const hashId = window.location.hash.replace('#', '');
    const hasMatch = Array.from(panels).some(p => p.id === hashId);
    activate(hasMatch ? hashId : tabGroup.dataset.default);

    buttons.forEach(b => {
      b.addEventListener('click', () => {
        activate(b.dataset.tab);
        history.replaceState(null, '', '#' + b.dataset.tab);
      });
    });
  });
});
