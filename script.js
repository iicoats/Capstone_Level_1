"use strict";

// Brian and Lewis assisted me.  I also copied and adapted code from chatgpt
const form = document.querySelector("form")
form.addEventListener("submit", multiplyBy195)
function multiplyBy195(event) {
  // Get the input number
  event.preventDefault()
  let input = document.getElementById("numberInput").value;

  // Check if the input is a valid number
  if (!isNaN(input)) {
    // Multiply the input by 1.95
    let result = input * 1.95;

    // Display the result in the "result" paragraph
    document.getElementById("result").innerHTML = "Result: " + result;
  } else {
    // Display an error message if the input is not a valid number
    document.getElementById("result").innerHTML =
      "Please enter a valid number.";
  }
}


