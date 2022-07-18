const menu = document.querySelector('#Union-menu');
const close = document.querySelector('#nav-button-close');
const navs = document.querySelector('#menu-navs')

close.addEventListener('click',()=>{
    navs.classList.toggle('hidden');
})

menu.addEventListener('click',()=>{
     navs.classList.toggle('hidden');
})