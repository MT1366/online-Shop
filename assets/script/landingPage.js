const containerslider = document.querySelector(".container-slider");
const slides = document.querySelectorAll(".slider");

// slides.forEach((s, i) => {
//   console.log(`Slide ${i + 1}:`, s);
// });

// containerslider.style.transform = "scale(1)";
const btnOne = document.querySelector(".b--1");
const btnTwo = document.querySelector(".b--2");
const btnThree = document.querySelector(".b--3");
const txtSlider = document.querySelectorAll(".txt-slider");

let curSlide = 0;

btnOne.addEventListener("click", () => {
  curSlide++;
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
    s.style.transform = `translateX(-400px)`;
  });
});

btnTwo.addEventListener("click", () => {
  curSlide++;
  slides.forEach((s, i) => {
    s.style.transform = "translateX(-800px)";
  });
});

btnThree.addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5500/login-page.html";
});
