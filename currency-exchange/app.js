checkInvalidAmount = (amountInput) => {
    return (isNaN(amountInput) || (amountInput < 0));
}
debugger;
currencyExchange = () => {
    let amount = document.getElementById("amount").value;
    amount = parseFloat(amount);

    if (checkInvalidAmount(amount)) 
    {
        document.getElementById("result").innerText =
        "Vui lòng nhập một số hợp lệ.";
        document.getElementById("result").style.color = "red";
        return;
    }

    let fromCurr = document.getElementById("from").value;
    let toCurr = document.getElementById("to").value;

    let convertedAmount = 0;

    if (fromCurr == toCurr) {
        convertedAmount = amount;
    }

    if (fromCurr == "VND" && toCurr == "USD") {
        convertedAmount = amount / 25000;
    }

    if (fromCurr == "USD" && toCurr == "VND") {
        convertedAmount = amount * 25000;
    }

    let result = document.getElementById("result").innerText = `Kết quả chuyển đổi là ${convertedAmount} ${toCurr}` ;
    document.getElementById("result").style.color = "green";
}

document.getElementById("from").addEventListener("change", () => {
    if (document.getElementById("from").value === 'USD') {
        document.getElementById("to").value = 'VND';
    }

    if (document.getElementById("from").value === 'VND') {
        document.getElementById("to").value = 'USD';
    }
});

document.getElementById("to").addEventListener("change", () => {
    if (document.getElementById("to").value === 'USD') {
        document.getElementById("from").value = 'VND';
    }
    
    if (document.getElementById("to").value === 'VND') {
        document.getElementById("from").value = 'USD';
    }
});

// format currency