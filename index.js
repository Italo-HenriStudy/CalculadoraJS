function isNumber(value) {
    return !isNaN(value);
}

function addition(number1, number2) {
    return number1 + number2;
}

function subtraction(number1, number2) {
    return number1 - number2;
 }
 
 function multiplication(number1, number2) {
    return number1 * number2;
 }
 
 function division(number1, number2) {
    return number1 / number2;
 }

 function calculate() {
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;
    const operation = document.getElementById("operation").value;

    if(!isNumber(number1) || !isNumber(number2)) {
        alert("Digite dois números válidos!");
        return;
    }

    let result;
    switch (operation) {
        case "addition":
            result = addition(Number(number1), Number(number2));
            break;
        case "subtraction":
            result = subtraction(Number(number1), Number(number2));
            break;
        case "multiplication":
            result = multiplication(Number(number1), Number(number2));
            break;
        case "division":
            result = division(Number(number1), Number(number2));
            break;
        default:
            alert("Selecione uma operação!");
            return;
    }

    alert(`O resultuado é ${result}`);
 }