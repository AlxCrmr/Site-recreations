    const menu = document.querySelector("#menu");
    const navigation = document.querySelector("#navigation");
    const close = document.querySelector(".close");
    const menuBox = document.querySelector(".menu-box");

    menu.addEventListener("click", function(){
        navigation.classList.toggle("display");
        menu.classList.toggle("hamburger-menu");
        menuBox.classList.toggle("hide");
        close.classList.toggle("display");
    });
