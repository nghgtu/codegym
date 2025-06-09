checkValidScore = function (score) {
    return (score >= 0 && score <= 10) && (!isNaN(score));
}

calculateAvgScore = function() {
    let phys = document.getElementById("phys").value;
    phys = parseFloat(phys);
    let chem = document.getElementById("chem").value;
    chem = parseFloat(chem);
    let bio = document.getElementById("bio").value;
    bio = parseFloat(bio);

    if (!(checkValidScore(phys) && checkValidScore(chem) && checkValidScore(bio))) {
        document.getElementById("result").innerText =
        "Vui lòng nhập số hợp lệ.";
        document.getElementById("result").style.color = "red";
        return;
    }

    let avgScore = (phys + chem + bio) / 3;

    document.getElementById(
        "result"
    ).innerText = `Kết quả tính toán là: ${avgScore.toFixed(1)}`;
}