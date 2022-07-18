/*  eslint linebreak-style: ["error", "windows"]    */
const menu = document.querySelector('#Union-menu');
const close = document.querySelector('#nav-button-close');
const navs = document.querySelector('#menu-navs');
const links = document.querySelectorAll('#menu-navs li');

close.addEventListener('click', () => {
  navs.classList.toggle('hidden');
});

menu.addEventListener('click', () => {
  navs.classList.toggle('hidden');
});

links.forEach((ele) => ele.addEventListener('click', () => {
  navs.classList.toggle('hidden');
}));

const bio = document.querySelector('#bio');
const about = document.querySelector('#about-me');
const activeNavs = document.querySelectorAll('#desk-list > li > a');

document.addEventListener('scroll', () => {
  if (window.pageYOffset < bio.offsetHeight + bio.offsetTop) {
    activeNavs.forEach((e) => e.classList.remove('active'));
    activeNavs[0].classList.add('active');
  } else if (window.pageYOffset < about.offsetHeight + about.offsetTop - 200) {
    activeNavs.forEach((e) => e.classList.remove('active'));
    activeNavs[1].classList.add('active');
  } else {
    activeNavs.forEach((e) => e.classList.remove('active'));
    activeNavs[2].classList.add('active');
  }
});
