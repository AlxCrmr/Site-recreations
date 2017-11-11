const menu = document.querySelector("#menu");
const burgerNav = document.querySelector("#hamburger-nav");

menu.addEventListener("click", function(){
    burgerNav.classList.toggle("showMenu");
});
