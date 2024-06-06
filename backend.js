const menu = document.querySelector(".nav_links");
const menuButton = document.querySelector(".menu_icon");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener('click', () =>{
    menu.classList.toggle("menu_open");
    overlay.classList.toggle("show");
})

overlay.addEventListener('click', () =>{
    menu.classList.toggle("menu_open");
    overlay.classList.toggle("show");
})