convertCtoF = function() {
    let celsius = document.getElementById("celsius").value;

    celsius = parseFloat(celsius);
    celsius = Math.round(celsius);

    if (isNaN(celsius)) {
        document.getElementById("result").innerText =
        "Vui lòng nhập một số hợp lệ.";
        document.getElementById("result").style.color = "red";
        return;
    }

    let fahrenheit = Math.round((celsius * 9) / 5 + 32);

    document.getElementById(
        "result"
    ).innerText = `Kết quả chuyển đổi là: ${celsius}°C = ${fahrenheit}°F`;
}