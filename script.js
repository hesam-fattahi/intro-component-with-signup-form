"use strict";

const inputGroups = [...document.querySelectorAll(".input-group")];
const inputs = [...document.querySelectorAll("input")];
const emailInput = document.querySelector("#email");

const errorMessages = [...document.querySelectorAll(".error-message")];

const btnSubmit = document.querySelector("button");

let emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  inputs.forEach((input, i) => {
    if (!input.value) {
      inputGroups[i].classList.add("error");
      input.value = "";
    } else if (!emailRegex.test(emailInput.value)) {
      errorMessages[2].textContent = "Looks like this is not an email";
      inputGroups[2].classList.add("error");
    } else {
      inputGroups[i].classList.remove("error");
    }
  });
});
