isInvalid = (operand) => {
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
    if (isInvalid(firstOperand) || isInvalid(secondOperand))
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
    
    if (isInvalid(firstOperand) || isInvalid(secondOperand))
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
    
    if (isInvalid(firstOperand) || isInvalid(secondOperand))
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
    
    if (isInvalid(firstOperand) || isInvalid(secondOperand) || (secondOperand == 0))
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

// modulo = () => {
//     if (isInvalid(firstOperand) || isInvalid(secondOperand) || (secondOperand == 0))
//     {
//         document.getElementById("result").innerText =
//         "Please enter valid number input";
//         document.getElementById("result").style.color = "red";
//         return;
//     }

//     let result = firstOperand % secondOperand;
//     document.getElementById("result").innerText = `${firstOperand} % ${secondOperand} = ${result.toFixed(1)}` ;
//     document.getElementById("result").style.color = "green";
// }

clearAll = () => {
    document.getElementById("first-operand").value = 0;
    document.getElementById("second-operand").value = 0;
    document.getElementById("result").innerText = `All Cleared`
}

xToThePowerY = () => {
    if (isInvalid(firstOperand) || isInvalid(secondOperand))
    {
        document.getElementById("result").innerText =
        "Please enter valid number input";
        document.getElementById("result").style.color = "red";
        return;
    }

    let result = Math.pow(firstOperand, secondOperand);
    document.getElementById("result").innerText = `${firstOperand} ^ ${secondOperand} = ${result.toFixed(2)}` ;
    document.getElementById("result").style.color = "green";
}

// ignore second operand
sqrt = () => {
    if (isInvalid(firstOperand) || (firstOperand < 0))
    {
        document.getElementById("result").innerText =
        "Please enter valid number input";
        document.getElementById("result").style.color = "red";
        return;
    }

    let result = Math.sqrt(firstOperand);
    document.getElementById("result").innerHTML = `&radic; ${firstOperand} = ${result.toFixed(2)}` ;
    document.getElementById("result").style.color = "green";
}

log10 = () => {
    if (isInvalid(firstOperand) || (firstOperand <= 0))
    {
        document.getElementById("result").innerText =
        "Please enter valid number input";
        document.getElementById("result").style.color = "red";
        return;
    }

    let result = Math.log10(firstOperand);
    document.getElementById("result").innerHTML = `log10 of ${firstOperand} = ${result.toFixed(2)}` ;
    document.getElementById("result").style.color = "green";
}

logE = () => {
    if (isInvalid(firstOperand) || (firstOperand <= 0))
    {
        document.getElementById("result").innerText =
        "Please enter valid number input";
        document.getElementById("result").style.color = "red";
        return;
    }

    let result = Math.log(firstOperand);
    document.getElementById("result").innerHTML = `Natural log of ${firstOperand} = ${result.toFixed(2)}` ;
    document.getElementById("result").style.color = "green";
}

factorial = () => {
    if (isInvalid(firstOperand) || (firstOperand < 0) || (firstOperand != Math.round(firstOperand)))
    {
        document.getElementById("result").innerText =
        "Please enter valid number input";
        document.getElementById("result").style.color = "red";
        return;
    }

    let result = 1;
    for (let i = 1; i <= firstOperand; i++) {
        result *= i;
    }
      
    document.getElementById("result").innerHTML = `Factorial of ${firstOperand}! = ${result}` ;
    document.getElementById("result").style.color = "green";

}

toggleRadnDeg = () => {
    let currVal = document.getElementById("rad-deg").value;
    // let currVal = this.value;
    // alert(document.getElementById("rad-deg").value);

    if (currVal == "Rad") {
    // currVal = "Deg";
    document.getElementById("rad-deg").value = "Deg";
    // alert(document.getElementById("rad-deg").value);
    document.getElementById("rad-deg").innerHTML = "Deg";
    // alert(document.getElementById("rad-deg").innerHTML);
    }

    if (currVal == "Deg") {
    // currVal = "Rad";
    document.getElementById("rad-deg").value = "Rad";
    // alert(document.getElementById("rad-deg").value);
    document.getElementById("rad-deg").innerHTML = "Rad";
    // alert(document.getElementById("rad-deg").innerHTML);
    }

    // if (currVal == "Rad") {
    //   this.value = "Deg";
    //   document.getElementById("rad-deg").innerHTML = "Deg";
    // }

    // if (currVal == "Deg") {
    //   this.value = "Rad";
    //   document.getElementById("rad-deg").innerHTML = "Rad";
    // }
}

showResult = () => {
    // eval()
    return;
}

// document.getElementById("first-operand").addEventListener("keypress", (event) => {
//     if (event.key === "Enter") {
//         event.preventDefault();
//         document.getElementById("full-expression").value = document.getElementById("first-operand").value;
        
//     }
// })

