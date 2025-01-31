// let navbar = document.querySelector('.navbar');

// //Arrow Function
// document.getElementById('menu-btn').onclick = () =>{
//     navbar.classList.toggle('active');
// }

const searchForm = document.querySelector('.search-form');

function search(){
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    sideBar.classList.remove('active');
}

const cart = document.querySelector('.cart-items-container');

function cartItem(){
    searchForm.classList.remove('active');
    cart.classList.toggle('active');
    sideBar.classList.remove('active');
}

const sideBar = document.querySelector('.navbar');

function sideMenu(){
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    sideBar.classList.toggle('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    sideBar.classList.remove('active');
}