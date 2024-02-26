// const buttoon = document.getElementById("btn");
// const emptyBox = document.getElementById("emptyBox");

// buttoon.addEventListener("click", function () {
//   emptyBox.textContent = "this is me";
// });

const buttoon = document.getElementById("btn");
const emptyBox = document.getElementById("emptyBox");
let isVisible = true;

buttoon.addEventListener("click", function () {
  if (isVisible) {
    emptyBox.textContent = "";
  } else {
    emptyBox.textContent = "This is me";
  }
  isVisible = !isVisible;
});

//

// btn.addEventListener("click", function () {
//   for (let i = 0; (i) => questions.length; i++) {}
// });

const sum1 = [2, 4, 6, 8, 10];
const sum2 = [3, 6, 9, 10, 12];
console.log(sum1, sum2);

function calculator(number) {
  if (number > 1) {
    console.log("it's positive");
  } else if (number < 1) {
    console.log("this is negative");
  } else if (number === 0) {
    console.log("this is zero");
  }
}
const blah = calculator(5);
const blah1 = calculator(1);
const blah2 = calculator(0);
const blah3 = calculator(-5);

for (let i = 1; i <= 4; i++) {
  console.log(i);
}
const fruitArray = [
  "pineapple",
  "strawberry",
  "banana",
  "apple",
  "mango",
  "kiwi",
];

for (let i = 0; i < fruitArray.length; i++) {
  console.log(fruitArray[i]);
}
