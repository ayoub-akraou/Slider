"use strict";
const btn = document.querySelectorAll("button");
const images = [...document.querySelectorAll(".image")];
const imageNumber = images.length;
let counter = images.length;
let i = 0;

function previous() {
  images[0].style.order = `${counter++}`;
  images.push(images.shift());
}
function next() {
  images[imageNumber - 1].style.order = `${-counter++}`;
  images.unshift(images.pop());
}

btn.forEach((e) => {
  e.addEventListener("click", function (a) {
    a.preventDefault();
    if (e.classList.contains("left")) {
      previous();
    } else {
      next();
    }
  });
});
