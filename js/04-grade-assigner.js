// The “Grade Assigner” Application

// Usage: Use else if or switch statements

// Collect the a number between 1 and 100 from the user.
// Make sure that number is between 1 and 100, if it is not, let the user know that only numbers between 1 and 100 are accepted.
// If the score is between 60 and 69, write out “You received a D” into the console.
// If the score is between 70 and 79, write out “You received a C” into the console.
// If the score is between 80 and 89, write out “You received a B” into the console.
// If the score is between 90 and 100, write out “You received an A” into the console.
// If the score is less than 60, write out “You received an F” into the console.


let userNumber = parseFloat(prompt("Enter a number between 1 and 100:"));
if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
    // console.log("Please enter a valid number between 1 and 100.");
    document.write("Please hit reload, then enter a valid number between 1 and 100.");
} else {
    switch (true) {
        case (userNumber >= 90 && userNumber <= 100):
            console.log("You received an A");
            break;
        case (userNumber >= 80 && userNumber <= 89):
            console.log("You received a B");
            break;
        case (userNumber >= 70 && userNumber <= 79):
            console.log("You received a C");
            break;
        case (userNumber >= 60 && userNumber <= 69):
            console.log("You received a D");
            break;
        // case (userNumber < 60):
        //     console.log("You received an F");
        //     break;
        default:
             console.log("You received an F");
            break;
    }
}  



