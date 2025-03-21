document.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const loginLink = document.getElementById("login-link"); // Use ID for better accuracy

    if (!loginLink) {
        console.error("Login link not found");
        return;
    }

    if (loggedInUser && loggedInUser.username) {
        loginLink.innerText = `${loggedInUser.username}`;
        loginLink.href = "#"; // Prevent navigation

        // Add logout functionality
        loginLink.addEventListener("click", () => {
            if (confirm("Vill du logga ut?")) {
                localStorage.removeItem("loggedInUser");
                window.location.reload();
            }
        });
    }
});

const overlay = document.querySelector(".overlay");
const headerCrossBtn = document.querySelector(".header__cross")
const header = document.querySelector(".header")
const headerMenu = document.getElementById("header__menu")

//eventhanterare

headerMenu.addEventListener("click", handleHamburgerBtn)
headerCrossBtn.addEventListener("click", handleCrossBtn)



//funktioner för event
function handleHamburgerBtn() {
    overlay.classList.add("overlay-active")
}
function handleCrossBtn() {
   overlay.classList.remove("overlay-active")
}
