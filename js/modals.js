const modalOverlay = document.querySelector(".modal-overlay");
const modalBase = document.querySelector(".modal");
const body = document.querySelector("body");

const showModal = (modalType) => {
    const modalElement = modalType === "search" ? document.querySelector(".search-modal") : modalBase;

    modalOverlay.classList.remove("display-none");
    modalElement.classList.remove("display-none");
    body.classList.add("overflow-hidden");
};

const hideModal = (modalType) => {
    const element = modalType === "search" ? document.querySelector(".search-modal") : modalBase;

    modalOverlay.classList.add("display-none");
    element.classList.add("display-none");
    body.classList.remove("overflow-hidden");
};

modalOverlay.addEventListener("click", hideModal);

const searchModalButton = document.querySelector(".header__search-button");

searchModalButton.addEventListener("click", () => showModal("search"));
