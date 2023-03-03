"use strict";
//ts@check

/*          CONTACT FORM       */

const form = document.getElementsByClassName("form");
const thankYou = document.getElementsByClassName("thank-you");
const nameInput = document.querySelector('input[fname="fullname"]');

let isFormValid = false;

const validateInputs = () => {
  nameInput.classList.remove("invalid");
  nameInput.nextElementSibling.classList.add("hidden");
  isFormValid = true;
  if (!nameInput.value) {
    nameInput.classList.add("invalid");
    nameInput.nextElementSibling.classList.remove("hidden");
    isFormValid = true;
  }
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  if (isFormValid) {
    form.remove();
    thankYou.classList.remove("hidden");
  }
});
nameInput.addEventListener("input", () => {
  validateInputs();
});

/* function validateForm() {
  {
    testName();
    testVEmail();
    testEmail();
    testphone();
  }



  function testName() {
    let regName = /^[A-Za-z]+$/;
    let fname = document.getElementById("fname").value;
    if (regName.test(fname)) {
      return true;
    } else {
      alert("Invalid full name");
      return false;
    }
  }

  function testEmail() {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = document.getElementById("email").value;
    if (emailRegex.test(email)) {
      return true;
    } else {
      alert("Invalid email address");
      return false;
    }
  }
  function testVEmail() {
    let vemailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let vemail = document.getElementById("vemail").value;
    if (vemailRegex.test(vemail)) {
      return true;
    } else {
      alert("Invalid email address");
      return false;
    }
  }
  function testphone() {
    let phoneRegex = /^[0-9]+$/;
    let phone = document.getElementById("phone").value;
    if (phoneRegex.test(phone)) {
      return true;
    } else {
      alert("Invalid phone number");
      return false;
    }
  }

  let address = document.getElementById("address").value;

  if (address.trim().length === 0) {
    alert("Invalid Address");
    return false;
  }
}
 */
