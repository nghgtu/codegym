isInvalid = (operand) => {
    return isNaN(operand);
}

Add = () => {
    
    document.getElementById("full-expression").value += " + ";

    // let val = document.getElementById("full-expression").value;

    // if (isInvalid(firstOperand) || isInvalid(secondOperand))
    // {
    //     document.getElementById("result").innerText =
    //     "Please enter valid number input";
    //     document.getElementById("result").style.color = "red";
    //     return;
    // }


    // let result = firstOperand + secondOperand;
    // document.getElementById("result").innerText = `${firstOperand} + ${secondOperand} = ${result.toFixed(1)}` ;
    // document.getElementById("result").style.color = "green";
}

Subtract = () => {
    document.getElementById("full-expression").value += " - ";
    // let val = document.getElementById("full-expression").value;

}

Multiply = () => {
    document.getElementById("full-expression").value += " * ";
    // let val = document.getElementById("full-expression").value;
}

Divide = () => {
    document.getElementById("full-expression").value += " / ";  
    
}

// modulo = () => {
//     if (isInvalid(firstOperand) || isInvalid(secondOperand) || (secondOperand == 0))
//     {
//         document.getElementById("result").innerText =
//         "Please enter valid number input";
//         document.getElementById("result").style.color = "red";
//         return;
//     }


clearAll = () => {
    document.getElementById("full-expression").value = 0;
    document.getElementById("result").innerText = `All Cleared`
}

xToThePowerY = () => {
    document.getElementById("full-expression").value += " ** ";

}

// only accept one operand
sqrt = () => {
    let val = document.getElementById("full-expression").value;
    if (isInvalid(val) || (val < 0))
    {
        document.getElementById("result").innerText =
        "Please enter valid number input";
        document.getElementById("result").style.color = "red";
        return;
    }

    let result = Math.sqrt(val);
    document.getElementById("result").innerHTML = `&radic; ${val} = ${result.toFixed(2)}` ;
    document.getElementById("result").style.color = "green";
}

log10 = () => {
    let val = document.getElementById("full-expression").value;
    if (isInvalid(val) || (val <= 0))
    {
        document.getElementById("result").innerText =
        "Please enter valid number input";
        document.getElementById("result").style.color = "red";
        return;
    }

    let result = Math.log10(val);
    document.getElementById("result").innerHTML = `log10 of ${val} = ${result.toFixed(2)}` ;
    document.getElementById("result").style.color = "green";
}

logE = () => {
    let val = document.getElementById("full-expression").value;
    if (isInvalid(val) || (val <= 0))
    {
        document.getElementById("result").innerText =
        "Please enter valid number input";
        document.getElementById("result").style.color = "red";
        return;
    }

    let result = Math.log(val);
    document.getElementById("result").innerHTML = `Natural log of ${val} = ${result.toFixed(2)}` ;
    document.getElementById("result").style.color = "green";
}

factorial = () => {
    let val = document.getElementById("full-expression").value;
    if (isInvalid(val) || (val < 0) || (val != Math.round(val)))
    {
        document.getElementById("result").innerText =
        "Please enter valid number input";
        document.getElementById("result").style.color = "red";
        return;
    }

    let result = 1;
    for (let i = 1; i <= val; i++) {
        result *= i;
    }
      
    document.getElementById("result").innerHTML = `Factorial of ${val}! = ${result}` ;
    document.getElementById("result").style.color = "green";

}

toggleRadnDeg = () => {
    
    let currVal = document.getElementById("rad-deg").value;


    if (currVal == "Rad") {
    document.getElementById("rad-deg").value = "Deg";
    document.getElementById("rad-deg").innerHTML = "Deg";
    }

    if (currVal == "Deg") {
    document.getElementById("rad-deg").value = "Rad";
    document.getElementById("rad-deg").innerHTML = "Rad";
    }

}

showResult = () => {
    // eval()
    let expression = document.getElementById("full-expression").value;
    let result = eval(expression);
    document.getElementById("result").innerHTML = `${expression} = ${result.toFixed(2)}` ;
    document.getElementById("result").style.color = "green";
    return;
}

// document.getElementsByClassName("numerical").addEventListener("click", (event) => {
//     alert(event.target.value);
// })

// document.getElementById("full-expression").addEventListener("change", (event) => {
//     // if (event.key === "Enter") {
//     //     event.preventDefault();
//     //     document.getElementById("full-expression").value = document.getElementById("full-expression").value;
        
//     // }
// })

appendExp = (number) => {
    document.getElementById("full-expression").value += `${number}`;
    
}

// trig functions
sin = () => {
    let angleUnit = document.getElementById("rad-deg").value;
    let angleVal = document.getElementById("full-expression").value;
    
    if (angleUnit === "Rad") {
        let result = Math.sin(angleVal);
        document.getElementById("result").innerHTML = `sin(${angleVal}) = ${result.toFixed(2)}` ;
        document.getElementById("result").style.color = "green";
    }

    if (angleUnit === "Deg") {
        let result = Math.sin(angleVal * (Math.PI / 180));
        document.getElementById("result").innerHTML = `sin(${angleVal}°) = ${result.toFixed(2)}` ;
        document.getElementById("result").style.color = "green";
    }
}

cos = () => {
    let angleUnit = document.getElementById("rad-deg").value;
    let angleVal = document.getElementById("full-expression").value;
    
    if (angleUnit === "Rad") {
        let result = Math.cos(angleVal);
        document.getElementById("result").innerHTML = `cos(${angleVal}) = ${result.toFixed(2)}` ;
        document.getElementById("result").style.color = "green";
    }

    if (angleUnit === "Deg") {
        let result = Math.cos(angleVal * (Math.PI / 180));
        document.getElementById("result").innerHTML = `cos(${angleVal}°) = ${result.toFixed(2)}` ;
        document.getElementById("result").style.color = "green";
    }
}

tan = () => {
let angleUnit = document.getElementById("rad-deg").value;
    let angleVal = document.getElementById("full-expression").value;
    
    if (angleUnit === "Rad") {
        let result = Math.cos(angleVal);
        document.getElementById("result").innerHTML = `cos(${angleVal}) = ${result.toFixed(2)}` ;
        document.getElementById("result").style.color = "green";
    }

    if (angleUnit === "Deg") {
        let result = Math.tan(angleVal * (Math.PI / 180));
        document.getElementById("result").innerHTML = `tan(${angleVal}°) = ${result.toFixed(2)}` ;
        document.getElementById("result").style.color = "green";
    }
}


