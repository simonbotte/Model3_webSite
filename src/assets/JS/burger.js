let burger = document.getElementById("burgerButton");
let menu = document.getElementById("menu");
let header = document.getElementById("header");
let body = document.getElementById("body");
let menuLink = menu.querySelectorAll("a");
console.log(menuLink);
let nbMenuLink = menuLink.length;
burger.addEventListener("click", () => {
    burger.classList.toggle("burgerButton--open");
    menu.classList.toggle("menu--open");
    header.classList.toggle("header--open");
    body.classList.toggle("body--stuck");
});

for (var i = 0; i < nbMenuLink; i++) {
    menuLink[i].addEventListener("click", () => {
        burger.classList.toggle("burgerButton--open");
        menu.classList.toggle("menu--open");
        header.classList.toggle("header--open");
        body.classList.toggle("body--stuck");
    });
}
