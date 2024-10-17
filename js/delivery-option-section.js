let chosenOption = "deliver-now";

const deliveryOptionButton = document.getElementById("delivery-option-button");
const dropdown = document.querySelector(".hero__delivery-options__dropdown");

deliveryOptionButton.addEventListener("click", () => {
    dropdown.classList.toggle("hero__delivery-options__dropdown--show");
});

const deliverNowOption = document.getElementById("deliver-now-option");

deliverNowOption.addEventListener("click", () => {
    dropdown.classList.remove("hero__delivery-options__dropdown--show");
    deliveryOptionButton.innerHTML = `
      <img src="assets/images/time.svg" alt="Time" />
                            <div class="hero__delivery-option__text">Dostarcz teraz</div>
                            <img src="assets/images/arrow-down.svg" alt="Arrow down" />`;
    chosenOption = "deliver-now";
});

const scheduleOption = document.getElementById("schedule-later-option");

scheduleOption.addEventListener("click", () => {
    dropdown.classList.remove("hero__delivery-options__dropdown--show");
    deliveryOptionButton.innerHTML = `
      <img src="assets/images/calendar.svg" alt="Time" />
                            <div class="hero__delivery-option__text">Scheduler Later</div>
                            <img src="assets/images/arrow-down.svg" alt="Arrow down" />`;
    chosenOption = "schedule-later";
});
