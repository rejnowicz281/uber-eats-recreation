import { hideModal, showModal } from "./modals.js";

const deliveryOptionButton = document.getElementById("delivery-option-button");
const deliveryOptionButtonText = document.querySelector(".hero__delivery-option__text");
const dropdown = document.querySelector(".hero__delivery-options__dropdown");
const schedulerModalDeliverNowButton = document.querySelector(".scheduler-modal__deliver-now-button");
const deliverNowOption = document.getElementById("deliver-now-option");
const schedulerModalButton = document.getElementById("schedule-later-option");
const daySelect = document.querySelector(".scheduler-modal__day-select");
const timeSelect = document.querySelector(".scheduler-modal__time-select");
const schedulerModalCloseButton = document.querySelector(".scheduler-modal__close");
const schedulerModalScheduleButton = document.querySelector(".scheduler-modal__schedule-button");

const toggleDropdown = () => {
    dropdown.classList.toggle("hero__delivery-options__dropdown--show");
};

const hideDropdown = () => {
    dropdown.classList.remove("hero__delivery-options__dropdown--show");
};

const setChosenOption = (option) => {
    deliveryOptionButtonText.textContent = option;
    hideDropdown();
};

deliveryOptionButton.addEventListener("click", () => {
    toggleDropdown();
});

deliverNowOption.addEventListener("click", () => {
    setChosenOption("Dostarcz teraz");
});

// Scheduler Modal

schedulerModalCloseButton.addEventListener("click", () => {
    hideModal();
    hideDropdown();
});

const setDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        days.push(date);
    }

    days.forEach((day, idx) => {
        const option = document.createElement("option");
        option.value = day.toISOString();
        option.textContent = day.toLocaleDateString("pl-PL", {
            weekday: "short",
            day: "numeric",
            month: "short"
        });

        if (idx === 0) option.textContent = "Dzisiaj, " + option.textContent;
        if (idx === 1) option.textContent = "Jutro, " + option.textContent;

        daySelect.appendChild(option);
    });

    daySelect.addEventListener("change", (event) => {
        const selectedIndex = event.target.selectedIndex;
        chosenDate = new Date(daySelect.options[selectedIndex].value);
    });

    return days;
};

const setTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const intervals = [];

    for (let i = hours; i < 24; i++) {
        for (let j = 0; j < 60; j += 15) {
            if (i === hours && j < minutes) continue;

            let startHours = i;
            let startMinutes = j;

            let endHours = i;
            let endMinutes = j + 15;

            if (endMinutes >= 60) {
                endMinutes -= 60;
                endHours += 1;
            }

            if (endHours === 24) break;

            intervals.push({
                start: { hours: startHours, minutes: startMinutes },
                end: { hours: endHours, minutes: endMinutes }
            });
        }
    }

    intervals.forEach(({ start, end }) => {
        const option = document.createElement("option");

        const text = `${start.hours}:${start.minutes.toString().padStart(2, "0")} - ${end.hours}:${end.minutes
            .toString()
            .padStart(2, "0")}`;

        option.value = text;
        option.textContent = text;

        timeSelect.appendChild(option);
    });

    timeSelect.addEventListener("change", (event) => {
        chosenTime = event.target.value;
    });
};

const days = setDays();
setTime();

schedulerModalButton.addEventListener("click", () => showModal("scheduler"));

schedulerModalDeliverNowButton.addEventListener("click", () => {
    hideModal();
    setChosenOption("Dostarcz teraz");
});

let chosenDate = days[0];
let chosenTime = timeSelect.children[0].value;

schedulerModalScheduleButton.addEventListener("click", () => {
    const text =
        chosenDate.toLocaleDateString("pl-PL", {
            weekday: "short",
            day: "numeric",
            month: "short"
        }) +
        ", " +
        chosenTime;

    setChosenOption(text);
    hideModal();
    hideDropdown();
});
