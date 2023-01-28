const menuIcon = document.querySelector(".menu__icon");
const closeMenuIcon = document.querySelector(".close__menu");

const menu = document.querySelector(".open__menu");

menuIcon.addEventListener("click", () => {
  menu.classList.add("menu__opened");
})

closeMenuIcon.addEventListener("click", () => {
  menu.classList.remove("menu__opened");
})