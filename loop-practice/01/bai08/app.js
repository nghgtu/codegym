function playGame() {
  let min = 0;
  let max = parseInt(prompt("Nhập số lớn nhất trong khoảng bạn muốn đoán:"));
  
  if (isNaN(max) || max <= 0) {
    alert("Khoảng không hợp lệ. Vui lòng thử lại!");
    return;
  }

  let secret = Math.floor(Math.random() * (max - min + 1)) + min;

  let attempts = 3;

  while (attempts > 0) {
    let guess = parseInt(prompt(`Bạn có ${attempts} lần đoán. Nhập số bạn đoán:`));

    if (isNaN(guess)) {
      alert("Vui lòng nhập một số hợp lệ!");
      continue;
    }

    if (guess === secret) {
      alert("Chúc mừng! Bạn đã đoán đúng!");
      return;
    } else if (guess < secret) {
      alert("Số bạn đoán nhỏ hơn số bí mật.");
    } else {
      alert("Số bạn đoán lớn hơn số bí mật.");
    }

    attempts--;
  }

  document.writeln(`Bạn đã hết số lần đoán! Số đúng là: ${secret}`);
  
}