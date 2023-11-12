// Get the input element and output element by their ids
const userInput = document.getElementById("inputValue");
const outputElement = document.getElementById("outputValue");

// Add an event listener to the input field to handle input changes
userInput.addEventListener("input", function() {
    // Get the user's input value
    const inputValue = parseFloat(userInput.value); // Parse as a number

    // Check if the input is a valid number
    if (!isNaN(inputValue)) {
        // Calculate and display the result (input multiplied by 5)
        const result = inputValue * 5;
        outputElement.textContent = `Result: ${result}`;
    } else {
        // Display an error message if the input is not a valid number
        outputElement.textContent = "Please enter a valid number.";
    }
});