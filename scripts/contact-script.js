"use strict";
//ts@check

/*          CONTACT FORM       */

function validateForm() {
  const fname = document.getElementById("fname").value.trim();
  const email = document.getElementById("email").value.trim();
  const vemail = document.getElementById("vemail").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();

  if (!testName(fname)) {
    alert("Invalid full name");
    return false;
  }

  if (!testEmail(email)) {
    alert("Invalid email address");
    return false;
  }

  if (!testEmail(vemail)) {
    alert("Invalid email address");
    return false;
  }

  if (!testPhone(phone)) {
    alert("Invalid phone number");
    return false;
  }

  if (address.length === 0) {
    alert("Invalid address");
    return false;
  }

  return true;
}

function testName(name) {
  const regName = /^[A-Za-z]+$/;
  return regName.test(name);
}

function testEmail(email) {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}

function testPhone(phone) {
  const phoneRegex = /^[0-9]+$/;
  return phoneRegex.test(phone);
}

function submitForm(event) {
  event.preventDefault(); // prevent the form from submitting

  if (!validateForm()) {
    return;
  }

  const form = document.getElementById("contact-form");
  form.classList.add("hidden");

  const thankYouMessage = document.getElementById("thank-you-message");
  thankYouMessage.classList.remove("hidden");

  document.getElementById("fname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("vemail").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("address").value = "";
}
