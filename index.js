const mainContainer = document.querySelector(".main-container");

const thankYouContainer = document.querySelector(".thank-you");

const submitButton = document.getElementById("submit");
const rateAgainButton = document.getElementById("rate-again");

const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

// submitButton.addEventListener("click", () => {
//   thankYouContainer.classList.remove("hidden");
//   mainContainer.style.display = "none";
// });

rateAgainButton.addEventListener("click", () => {
  thankYouContainer.classList.add("hidden");
  mainContainer.style.display = "block";
});

// rates.forEach((rate) => {
//   rate.addEventListener("click", () => {
//     rating.innerHTML = rate.innerHTML;
//   });
// });
rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
    submitButton.addEventListener("click", () => {
       thankYouContainer.classList.remove("hidden");
       mainContainer.style.display = "none";
     });
  });
});
