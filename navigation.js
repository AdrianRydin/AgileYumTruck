
const overlay = document.querySelector(".overlay");
const headerCrossBtn = document.querySelector(".header__cross")
const header = document.querySelector(".header")
const headerMenu = document.getElementById("header__menu")

//eventhanterare

headerMenu.addEventListener("click", handleHamburgerBtn)
headerCrossBtn.addEventListener("click", handleCrossBtn)



//funktioner för event
function handleHamburgerBtn() {
    header.classList.add("header-hidden")
    overlay.classList.add("overlay-active")
}
function handleCrossBtn() {
   header.classList.remove("header-hidden")
   overlay.classList.remove("overlay-active")
}



