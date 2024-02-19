// const number = prompt(15);
// function oddEven() {
//   if (number % 2 === 0) console.log("even");
//   else {
//     console.log("odd");
//   }
// }
const userInput = prompt("Enter a number:");

// Convert the user input to a number
const number = parseInt(userInput);

function oddEven() {
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

// Call the function
oddEven();
