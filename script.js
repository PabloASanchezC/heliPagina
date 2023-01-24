const burger = document.querySelector(".burgerMenu");
const navMenu = document.querySelector(".indice");
burger.addEventListener("click", toggleNavMenu);

function toggleNavMenu() {
	navMenu.classList.toggle("inactive");
}