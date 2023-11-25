class NumberConverter {
    constructor(inputValue, inputBasis, outputBasis) {
        this.inputValue = inputValue;
        this.inputBasis = inputBasis;
        this.currentValue = inputValue;
        this.currentBasis = inputBasis;
        this.outputBasis = outputBasis;
        this.outputValue = null;
        this.validValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        this.inputBasisIsValid = this.isValidBase(inputBasis);
        this.outputBasisIsValid = this.isValidBase(outputBasis);
        this.inputValueIsValid = this.isValidInputValue(inputValue, inputBasis);
    }

    // Method used to validate input and output basis
    isValidBase(basis) {
        const validBases = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
        return validBases.includes(basis);
    }

    // Method used to validate input values
    isValidInputValue(value, basis) {
        const validValuesSlice = this.validValues.slice(0, Number(basis));
        for (let i = 0; i < value.length; i++) {
            const char = value[i].toUpperCase();
            if (!validValuesSlice.includes(char)) {
                return false;
            }
        }
        return true;
    }

    // Method used to convert inputValue in inputBasis into value in decimal basis,
    // then store the value in decimal basis into currentValue and change currentBasis to decimal.
    convertToDecimalBasis() {
        
        console.log("---------------------------------");
        console.log("convertToDecimalBase");
        
        if (this.currentBasis === 10) {
            this.currentValue = this.inputValue;
            console.log("Value is already in decimal basis.");
        } else {
            console.log("Value not in decimal basis, we will convert it to decimal first.");
            console.log("Input value String is " + this.inputValue);

            let decimalValue = 0;
            let i = 0;
            const stringLength = this.inputValue.length;

            while (i < stringLength) {

                console.log("Condition is met, because i " + i + " is smaller than stringLength " + stringLength);

                let character = this.inputValue[i];
                let position = stringLength - i - 1;
                let characterValue = this.validValues.indexOf(character);
                let numeralDecimalValue = characterValue * (this.inputBasis ** position);
                console.log("Numeral at position " + i + " is " + character + " and has value " + numeralDecimalValue);
                decimalValue += numeralDecimalValue;
                i += 1;
            }
            console.log("Current value in decimal basis is " + decimalValue);
            this.currentBasis = 10;
            this.currentValue = decimalValue;

            console.log("---------------------------------");
        }
    }

    // Method used to convert the currentValue in currentBasis to the outputBasis
    convertFromDecimalToOutputBasis() {

        console.log("---------------------------------");
        console.log("converFromDecimalToOutputBasis");

        let remainders = [];
        const outputBasisInt = parseInt(this.outputBasis);
        let numberToDivide = parseInt(this.currentValue);
        
        console.log("Number to be converted is " + numberToDivide);
        console.log("Output basis is " + outputBasisInt);

        while (numberToDivide >= outputBasisInt) {
            
            let remainder = numberToDivide % outputBasisInt;
            let quotient = (numberToDivide - remainder) / outputBasisInt;

            console.log(numberToDivide + "/" + outputBasisInt + "=" + quotient + ", remainder =" + remainder);   

            remainders.push(this.validValues[remainder]);

            numberToDivide = quotient;
        }
        
        remainders.push(this.validValues[numberToDivide]);
        remainders.reverse();

        const remaindersString = remainders.join('');

        this.outputValue = remaindersString;

        console.log("---------------------------------");
    }
}