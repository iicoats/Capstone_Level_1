"use strict";

// from chatgpt with adjustments
let num1, num2;

function multiplyBy() {
  
  num1 = parseFloat(document.getElementById("perMile").value);
  num2 = parseFloat(document.getElementById("miles").value);
  
  
  if (isNaN(num1) * isNaN(num2)) {
    alert("Please enter valid numbers");
    return;
  }
  
  
  document.getElementById("mileage").innerHTML = num1 * num2;
}

