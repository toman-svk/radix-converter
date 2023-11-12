const inputValue = document.getElementById("inputValue");
const outputValue = document.getElementById("outputValue");
const inputNumberBase = document.getElementById("inputNumberBase");
const outputNumberBase = document.getElementById("outputNumberBase");

function updateOutput() {

    const inputValueNum = parseInt(inputValue.value);
    const inputBaseNum = parseInt(inputNumberBase.value);
    const outputBaseNum = parseInt(outputNumberBase.value);

    if (!isNaN(inputValueNum) && !isNaN(inputBaseNum) && !isNaN(outputBaseNum)) {ß

        const converter = new NumberConverter(inputValueNum, inputBaseNum, outputBaseNum);

        if (converter.inputValueIsValid && converter.inputBaseIsValid && converter.outputBaseIsValid) {

            outputValue.textContent = "first check done."

        } else {
            outputValue.textContent = "Please enter valid inputs.";

        }
    } else {

    }
};

inputValue.addEventListener("input", updateOutput)
inputNumberBase.addEventListener("input", updateOutput)
outputNumberBase.addEventListener("input", updateOutput)
