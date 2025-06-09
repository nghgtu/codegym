calculateCircleArea = function() {
    let radius = document.getElementById("radius").value;

    radius = parseFloat(radius);

    if (isNaN(radius)) {
        document.getElementById("result").innerText =
        "Vui lòng nhập một số hợp lệ.";
        document.getElementById("result").style.color = "red";
        return;
    }

    let circleArea = Math.pow(radius, 2) * Math.PI;

    document.getElementById(
        "result"
    ).innerText = `Kết quả tính toán là: ${circleArea.toFixed(2)} dvdt`;
}