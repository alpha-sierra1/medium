// const buttoon = document.getElementById("btn");
// const emptyBox = document.getElementById("emptyBox");

// buttoon.addEventListener("click", function () {
//   emptyBox.textContent = "this is me";
// });

// const buttoon = document.getElementById("btn");
// const emptyBox = document.getElementById("emptyBox");
// let isVisible = true;

// buttoon.addEventListener("click", function () {
//   if (isVisible) {
//     emptyBox.textContent = "";
//   } else {
//     emptyBox.textContent = "This is me";
//   }
//   isVisible = !isVisible;
// });

// const data1 = document.getElementById("data2");

const obj = {
  book: "Inconginto",
  author: "David Eagleman",
  published: 1998,
};
console.log("obj");
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

function sum(x, y) {
  return x + y;
}

const sum3 = sum(9, 3);
console.log(sum3);

// fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
//   response
//     .json()
//     .then((data) => {
//       console.log("Users:", users);
//     })
//     .catch((error) => {console.error("Error:", error))

//   });
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const userNames = data.map((user) => user.name);
    data1.push(userNames);

    // console.log("User Names:", userNames);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

array1 = [3, 4, 4, [2, 4, 6, 9]];
console.log(array1.flat());

function flattenArray(x) {
  x.flat();
}
