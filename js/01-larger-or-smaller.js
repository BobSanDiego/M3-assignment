//Larger or Smaller?

//Usage: Use simple conditional statements

// create a javascript application that accepts two integers within two separate prompts. 
// Then, display only the larger of the two within the browser window. 
// Don’t forget to handle the fact that the two could be equal.

// I used parseFloat() to convert the prompt input to numbers,
// and added a check for valid numbers using isNaN().


let number1 = parseFloat(prompt("Enter a number:"));
let number2 = parseFloat(prompt("Enter another number:"));
if (isNaN(number1) || isNaN(number2)) {
  document.write("Please enter valid numbers. Reload page and try again...");
} else {
    if (number1 > number2) {
        document.write(`The larger number is: ${number1}`);
    } else if (number2 > number1) {
        document.write(`The larger number is: ${number2}`);
    } else {
        document.write(`The numbers are equal: ${number1}`);
    }
}

