let n = Number(prompt("Nhập một số nguyên dương để tính giai thừa:"));
if (isNaN(n) || n < 0 || !Number.isInteger(n)) {
  document.writeln("Vui lòng nhập một số nguyên dương.");
} else {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i; // Tính giai thừa
  }
  document.writeln(`Giai thừa của ${n} là: ${factorial}`);
}