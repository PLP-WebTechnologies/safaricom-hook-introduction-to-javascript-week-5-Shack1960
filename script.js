
// Variables and Data Types
const name = "John Doe"; // String
const age = 25; // Number
const isStudent = true; // Boolean
const hobbies = ["Reading", "Coding", "Hiking"]; // Array
const user = { name: "Jane", profession: "Engineer" }; // Object

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`User: ${JSON.stringify(user)} (Type: ${typeof user})`);

// Operators: Simple Calculator
function calculator() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
        default:
            alert("Invalid operation. Please use +, -, *, or /.");
            return;
    }

    alert(`Result: ${result}`);
}
calculator();

// Functions: Greeting Message
function greetUser(name) {
    return `Hello, ${name}! Welcome to the JavaScript Assignment.`;
}
document.getElementById("greeting").textContent = greetUser("Alice");



// If Statements: Voting Eligibility
const userAge = parseInt(prompt("Enter your age:"));
const eligibilityMessage =
    userAge >= 18
        ? "You are eligible to vote."
        : "You are not eligible to vote yet.";
document.getElementById("eligibility").textContent = eligibilityMessage;

// Loops: Numbers from 1 to 10
const numberList = document.getElementById("number-list");
for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
}



// Selecting and Modifying HTML Elements
document.querySelector("h1").textContent = "JavaScript in Action!";
const dynamicDiv = document.getElementById("dynamic-content");
const newParagraph = document.createElement("p");
newParagraph.textContent =
    "This content was added dynamically using JavaScript.";
dynamicDiv.appendChild(newParagraph);
