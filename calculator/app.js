checkInvalidOperandInput = (operand) => {
    return isNaN(operand);
}

let firstOperand = 0;
let secondOperand = 0;

document.getElementById("first-operand").addEventListener("change", (event) => {
    firstOperand = parseFloat(event.target.value);
})

document.getElementById("second-operand").addEventListener("change", (event) => {
    secondOperand = parseFloat(event.target.value);
});

add = () => {
    if (checkInvalidOperandInput(firstOperand) || checkInvalidOperandInput(secondOperand))
    {
        document.getElementById("result").innerText =
        "Please enter valid number input";
        document.getElementById("result").style.color = "red";
        return;
    }

    let result = firstOperand + secondOperand;
    document.getElementById("result").innerText = `${firstOperand} + ${secondOperand} = ${result.toFixed(1)}` ;
    document.getElementById("result").style.color = "green";
}

subtract = () => {
    
    if (checkInvalidOperandInput(firstOperand) || checkInvalidOperandInput(secondOperand))
    {
        document.getElementById("result").innerText =
        "Please enter valid number input";
        document.getElementById("result").style.color = "red";
        return;
    }

    let result = firstOperand - secondOperand;
    document.getElementById("result").innerText = `${firstOperand} - ${secondOperand} = ${result.toFixed(1)}` ;
    document.getElementById("result").style.color = "green";
}

multiply = () => {
    
    if (checkInvalidOperandInput(firstOperand) || checkInvalidOperandInput(secondOperand))
    {
        document.getElementById("result").innerText =
        "Please enter valid number input";
        document.getElementById("result").style.color = "red";
        return;
    }

    let result = firstOperand * secondOperand;
    document.getElementById("result").innerText = `${firstOperand} * ${secondOperand} = ${result.toFixed(1)}` ;
    document.getElementById("result").style.color = "green";
}

divide = () => {
    
    if (checkInvalidOperandInput(firstOperand) || checkInvalidOperandInput(secondOperand) || (secondOperand == 0))
    {
        document.getElementById("result").innerText =
        "Please enter valid number input";
        document.getElementById("result").style.color = "red";
        return;
    }

    let result = firstOperand / secondOperand;
    document.getElementById("result").innerText = `${firstOperand} / ${secondOperand} = ${result.toFixed(1)}` ;
    document.getElementById("result").style.color = "green";
}

modulo = () => {
    if (checkInvalidOperandInput(firstOperand) || checkInvalidOperandInput(secondOperand) || (secondOperand == 0))
    {
        document.getElementById("result").innerText =
        "Please enter valid number input";
        document.getElementById("result").style.color = "red";
        return;
    }

    let result = firstOperand % secondOperand;
    document.getElementById("result").innerText = `${firstOperand} % ${secondOperand} = ${result.toFixed(1)}` ;
    document.getElementById("result").style.color = "green";
}