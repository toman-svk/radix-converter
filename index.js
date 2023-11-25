const inputValue = document.getElementById("inputValue");
const outputValue = document.getElementById("outputValue");
const inputBasis = document.getElementById("inputNumberBase");
const outputBasis = document.getElementById("outputNumberBase");

function updateOutput() {

    const inputValueString = inputValue.value.toString();
    const inputBasisString = inputBasis.value.toString();
    const outputBasisString = outputBasis.value.toString();

    if (!isNaN(inputValueString) && !isNaN(inputBasisString) && !isNaN(outputBasisString)) {

        const converter = new NumberConverter(inputValueString, inputBasisString, outputBasisString);

        if (converter.inputValueIsValid && converter.inputBasisIsValid && converter.outputBasisIsValid) {

            console.log("Input value is valid: " + converter.inputValueIsValid)
            console.log("Input base is valid: " + converter.inputBasisIsValid)
            console.log("Output base is valid: " + converter.outputBasisIsValid)

            converter.convertToDecimalBasis();
            converter.convertFromDecimalToOutputBasis();
            outputValue.textContent = converter.outputValue;
            console.log("Output value is " + converter.outputValue)

        } else {
            outputValue.textContent = "Please enter valid inputs.";
            console.log("Input value is valid: " + converter.inputValueIsValid)
            console.log("Input base is valid: " + converter.inputBasisIsValid)
            console.log("Output base is valid: " + converter.outputBasisIsValid)

        }
    } 



};

inputValue.addEventListener("input", updateOutput)
inputNumberBase.addEventListener("input", updateOutput)
outputNumberBase.addEventListener("input", updateOutput)


