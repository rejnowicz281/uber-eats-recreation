// Header scroll effect

const header = document.querySelector(".header");
const loginLink = document.querySelector(".header__login-link");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        loginLink.classList.add("header__login-link--scrolled");
        header.classList.add("header--scrolled");
    } else {
        loginLink.classList.remove("header__login-link--scrolled");
        header.classList.remove("header--scrolled");
    }
});
