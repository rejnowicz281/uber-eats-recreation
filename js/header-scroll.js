const header = document.querySelector(".header");
const loginLink = document.querySelector(".header__login-link");
const headerSearchButton = document.querySelector(".header__search-button");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        loginLink.classList.add("header__login-link--scrolled");
        header.classList.add("header--scrolled");
    } else {
        loginLink.classList.remove("header__login-link--scrolled");
        header.classList.remove("header--scrolled");
    }

    if (window.scrollY > 300) {
        headerSearchButton.classList.add("header__search-button--scrolled");
    } else {
        headerSearchButton.classList.remove("header__search-button--scrolled");
    }
});
