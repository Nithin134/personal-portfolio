const sidebar = document.querySelector('header .menu ul');
const mobileMenu = document.querySelector('.menu-icon');

if (sidebar && mobileMenu) {
  mobileMenu.addEventListener('click', () => {
    const menuIcon = mobileMenu.firstElementChild;
    const menuVisible = sidebar.style.display === 'flex';

    sidebar.style.display = menuVisible ? 'none' : 'flex';

    if (menuIcon) {
      menuIcon.classList.toggle('fa-bars', menuVisible);
      menuIcon.classList.toggle('fa-times', !menuVisible);
    }
  });

  sidebar.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' && window.innerWidth <= 768) {
      sidebar.style.display = 'none';
      const menuIcon = mobileMenu.firstElementChild;
      if (menuIcon) {
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-times');
      }
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      sidebar.style.display = 'flex';
      const menuIcon = mobileMenu.firstElementChild;
      if (menuIcon) {
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-times');
      }
    } else {
      sidebar.style.display = 'none';
    }
  });
}
