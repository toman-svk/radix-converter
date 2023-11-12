class NumberConverter {
    constructor(inputValue, inputBase, outputBase) {
        this.inputValue = inputValue;
        this.inputBase = inputBase;
        this.currentValue = inputValue;
        this.currentBase = inputBase;
        this.outputBase = outputBase;
        this.outputValue = null;
        this.inputBaseIsValid = this.isValidBase(inputBase)
        this.outputBaseIsValid = this.isValidBase(outputBase)
        this.inputValueIsValid = this.isValidInputValue(inputValue, inputBase)
    }

    isValidBase(base) {
        const validBases = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        return validBases.includes(base);
    }

    isValidInputValue(value, base) {
        const validValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        const validValuesSlice = validValues.slice(0, base);
        const valueString = value.toString();

        for (let i = 0; i < valueString.length; i++) {
            const char = valueString[i].toUpperCase();
            if (!validValuesSlice.includes(char)) {
                return false;
            }
        }
        return true;
    }

    convertToDecimalBase() {
        if (this.currentBase === 10) {
            this.currentValue = this.inputValue;
        } else {
            inputValue = inputValue.toString();
            let decimalValue = 0;

            for (let i = inputValue.length - 1; i >= 0; i--) {
                let numeral = parseInt(inputValue[i], inputBase);
                decimalValue += numeral * Math.pow(inputBase, inputValue.length - 1 - i);
            }
            this.currentBase = 'decimal'
            this.currentValue = decimalValue;
        }
    }



    // Method to convert the inputValue to the outputBase
    convertValue(inputValue) {
        if (this.currentBase === null) {
            this.calculateCurrentBase();
        }

        // Your conversion logic goes here
        // For now, let's just return the input value as it is
        return inputValue;
    }
}