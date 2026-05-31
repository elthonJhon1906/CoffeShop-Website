const searchForm = document.querySelector('.search-form');
const cart = document.querySelector('.cart-items-container');
const sideBar = document.querySelector('.navbar');
const searchBtn = document.getElementById('search-btn');
const cartBtn = document.getElementById('cart-btn');
const menuBtn = document.getElementById('menu-btn');
const cartRemoveButtons = document.querySelectorAll('.cart-item .fa-times');

function closeAll() {
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    sideBar.classList.remove('active');
}

function search() {
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    sideBar.classList.remove('active');
}

function cartItem() {
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    sideBar.classList.remove('active');
}

function sideMenu() {
    sideBar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
}

searchBtn.addEventListener('click', search);
cartBtn.addEventListener('click', cartItem);
menuBtn.addEventListener('click', sideMenu);

cartRemoveButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.closest('.cart-item').remove();
    });
});

document.addEventListener('click', (event) => {
    const isInsideHeader = event.target.closest('.header');

    if (!isInsideHeader) {
        closeAll();
    }
});

window.addEventListener('scroll', closeAll);
