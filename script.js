// const close = document.querySelector('.image')
// const imageBox = document.querySelector('.image_box')
// console.log(close)

// close.addEventListener("click", () => {
//     imageBox.style.display = "block"
// })

window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.remove("preload");
  }, 1000);
});

const openMe = document.querySelector(".join1_0");
const doingMe = document.querySelector(".view");

console.log(doingMe);
openMe.addEventListener("click", () => {
  doingMe.style.display = "block";
});

const closeMe = document.querySelector(".span");
const viewMe = document.querySelector(".view");

console.log(viewMe);
closeMe.addEventListener("click", () => {
  viewMe.style.display = "none";
});

const words = [
  "What about working together ?",
  "You know what you should do ?",
  "Let me know your appreciation...",
  "Have a great day!",
];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  const display = document.getElementById("typing");

  if (!isDeleting) {
    display.textContent = currentWord.substring(0, j + 1);
    j++;

    if (j === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    display.textContent = currentWord.substring(0, j - 1);
    j--;
  }

  if (j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 80 : 150);
}

type();
