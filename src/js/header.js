const openMobileMenu = document.querySelector('button.js-burger-menu');
const mobileMenuBackdrop = document.querySelector('div.js-mobile-menu');
const mobileMenu = document.querySelector('#mobile-menu');
const menu = document.querySelector('div.js-nav-menu');

const widthMQ = window.matchMedia('(min-width: 768px)');

checkScreenWidth();
widthMQ.addEventListener('change', onWidthChange);

function checkScreenWidth() {
  if (window.innerWidth >= 768) {
    menu.addEventListener('click', onMenuClick);
  } else {
    openMobileMenu.addEventListener('click', onOpenMobMenuBtnClick);
  }
}

function onOpenMobMenuBtnClick() {
  mobileMenuBackdrop.classList.add('is-open');
  document.body.style.position = 'fixed';

  this.removeEventListener('click', onOpenMobMenuBtnClick);

  mobileMenu.addEventListener('click', inMobMenuClick);
}

function inMobMenuClick(event) {
  if (event.target.nodeName !== 'DIV' && event.target.nodeName !== 'UL') {
    mobileMenuBackdrop.classList.remove('is-open');
    document.body.style.position = '';

    this.removeEventListener('click', inMobMenuClick);

    openMobileMenu.addEventListener('click', onOpenMobMenuBtnClick);
  }
}

function onMenuClick() {
  document.querySelector('ul.menu-nav-list').classList.toggle('is-visible');
}

function onWidthChange(e) {
  if (!e.matches) {
    openMobileMenu.addEventListener('click', onOpenMobMenuBtnClick);

    menu.removeEventListener('click', onMenuClick);
    return;
  }

  mobileMenuBackdrop.classList.remove('is-open');
  document.body.style.position = '';

  mobileMenu.removeEventListener('click', inMobMenuClick);

  menu.addEventListener('click', onMenuClick);
}
