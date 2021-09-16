const btn = document.querySelector('.menu-nav-toggle');
const nav = document.querySelector('.menu-nav');
const li = document.getElementsByClassName('item-nav') // on choisit le ul ici avec la classe .nav-menu 

btn.addEventListener('click', () => {
    li[0].classList.toggle('active');
    li[1].classList.toggle('active');
    li[2].classList.toggle('active');
    li[3].classList.toggle('active');
    li[4].classList.toggle('active');
    li[5].classList.toggle('active');

    nav.classList.toggle('active');
});

