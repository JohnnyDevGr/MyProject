"use strict";
//ts@check

/*            SLIDESHOW            */
let slideIndex = 1;
let slides = document.getElementsByClassName("slides");
let dots = document.getElementsByClassName("dot");
let playButton = document.getElementById("play");
let stopButton = document.getElementById("stop");
let slideInterval;

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
  slideInterval = setTimeout(showSlides, 5000);
  playButton.style.display = "none";
  stopButton.style.display = "block";
}

function stopSlide() {
  clearTimeout(slideInterval);
  stopButton.style.display = "none";
  playButton.style.display = "block";
}
function updateInterval() {
  interval = intervalInput.value;
  if (slideInterval) {
    clearTimeout(slideInterval);
    slideInterval = setTimeout(showSlides, interval);
  }
}

for (let i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}

slides[0].style.display = "block";
showSlides();
