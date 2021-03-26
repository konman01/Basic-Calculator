const defaultVal = 0;

let currentResult = defaultVal;
//let result;

// function to add number
// it is not important where we define function
function add() {
    // defaultVal is at the global scope
    // result is at the local scope to the function
    // function can access the global variable
    // local variable cannot be used outside the function
    //result = num1 + num2;

    let returnResult = currentResult + userInput.value;
    let calculationDesc = ` (${defaultVal} + 10) * 3 / 2 - 1 `; // reduces the concatination
    outputResult(returnResult, calculationDesc);
    // any statement after return does not execute

}

// add function will only be executed when the button is clicked
addBtn.addEventListener('click', add);

//currentResult = add(1, 2);

//let calculationDesc = '(0 + 10) * 3 / 2 - 1';

//let calculationDesc = '(' + currentResult + ' + 10) * 3 / 2 - 1';



let errorMessage = ' error message is here \''; // \ is the escape character




