const defaultVal = 0;

let currentResult = defaultVal;

// function to add number
function add(num1, num2) {
    // defaultVal is at the global scope
    // result is at the local scope to the function
    const result = num1 + num2;

    return result;
}

currentResult = currentResult + 10;
    
    
//let calculationDesc = '(0 + 10) * 3 / 2 - 1';

//let calculationDesc = '(' + currentResult + ' + 10) * 3 / 2 - 1';

let calculationDesc = ` (${defaultVal} + 10) * 3 / 2 - 1 `; // reduces the concatination

let errorMessage = ' error message is here \''; // \ is the escape character


outputResult(currentResult, calculationDesc);

