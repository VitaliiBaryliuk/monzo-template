
(function landing() {
  const openMenu = document.querySelector('.header__open-menu-label');
  const closeMenu = document.querySelector('.header__close-menu-label');

  function setMenu(menuCheckbox, menu, topMenu) {
    return function ret() {
      if (menuCheckbox.checked) {
        menu.style.display = 'block';
        closeMenu.style.display = 'flex';
        openMenu.style.display = 'none';
        topMenu.dataset.hidemenu = 'false';
      } else {
        menu.style.display = 'none';
        closeMenu.style.display = 'none';
        openMenu.style.display = 'flex';
        topMenu.dataset.hidemenu = 'true';
      }

      console.log('checked', menuCheckbox.checked);
    }
  }

  function onScrollEvent(scrollPosition, topMenu) {
    return (event) => {
      if (topMenu.dataset.hidemenu === 'true') {
        if (scrollPosition === 0) {
          scrollPosition = window.pageYOffset;
        } else if (window.pageYOffset > scrollPosition) {
          topMenu.classList.add('zerro-height');
          scrollPosition = window.pageYOffset;
        } else {
          topMenu.classList.remove('zerro-height');
          scrollPosition = window.pageYOffset;
        }
      }
    };
  }

  function setFixedMenu() {
    const menuCheckbox = document.querySelector('.header__menu-checkbox');
    const topMenu = document.querySelector('.header__top');
    const menu = document.querySelector('.header__nav-mobile');
    let scrollPosition = 0;
    menuCheckbox.addEventListener('click', setMenu(menuCheckbox, menu, topMenu));    
    document.addEventListener('scroll', onScrollEvent(scrollPosition, topMenu));
  }

  setFixedMenu();
}());
