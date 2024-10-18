const modalOverlay = document.querySelector(".modal-overlay");
const allModals = document.querySelectorAll(".modal");
const body = document.querySelector("body");

const getModalElement = (modalType) => {
    if (modalType === "search") return document.querySelector(".search-modal");

    if (modalType === "scheduler") return document.querySelector(".scheduler-modal");

    return document.querySelector(".modal");
};

export const showModal = (modalType) => {
    const modalElement = getModalElement(modalType);

    modalOverlay.classList.remove("display-none");
    modalElement.classList.remove("display-none");
    body.classList.add("overflow-hidden");
};

export const hideModal = () => {
    modalOverlay.classList.add("display-none");
    allModals.forEach((modal) => modal.classList.add("display-none"));
    body.classList.remove("overflow-hidden");
};

modalOverlay.addEventListener("click", () => hideModal());

const searchModalButton = document.querySelector(".header__search-button");

searchModalButton.addEventListener("click", () => showModal("search"));
