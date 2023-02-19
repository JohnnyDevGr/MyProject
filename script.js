"use strict";
//ts@check

/*    CONTACT FORM     */

function validateForm() {
  {
    testName();
    testLname();
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
      alert("Invalid first name");
      return false;
    }
  }

  function testLname() {
    let regName = /^[A-Za-z]+$/;
    let lname = document.getElementById("lname").value;
    if (regName.test(lname)) {
      return true;
    } else {
      alert("Invalid last name");
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
    alert("Address is missing");
    return false;
  }
}

/*            SLIDESHOW            */
let slideIndex = 1;
let slides = document.getElementsByClassName("slides");
let dots = document.getElementsByClassName("dot");
let slideInterval;
showSlides();

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  slideInterval = setTimeout(showSlides, 5000);
}

function prevSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex--;
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function nextSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function currentSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex = index;
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function playSlide() {
  slideInterval = setTimeout(showSlides, 3000);
  playButton.style.display = "none";
  stopButton.style.display = "block";
}

function stopSlide() {
  clearTimeout(slideInterval);
  stopButton.style.display = "none";
  playButton.style.display = "block";
}

// Set default style of images to "none"
for (let i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}

// Show the first image
slides[0].style.display = "block";
dots[0].className += " active";
playButton.style.display = "none";
showSlides();

/*          JSON       */
const req = new XMLHttpRequest();

req.open("GET");

/*    RANDOM BEACHES ON HOMEPAGE   */
