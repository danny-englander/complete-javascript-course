"use strict";

const btnCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
// More than one open buttons, use querySelectorAll.
const btnsOpenModal = document.querySelectorAll(".show-modal");

// Close modal function.
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const OpenModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Loop the open modal buttons.
for (let i = 0; i < btnsOpenModal.length; i++) {
  // Open the modal from any of the 3 buttons.
  btnsOpenModal[i].addEventListener("click", OpenModal);
}

// Call the custom function to close the modal for these elements.
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
