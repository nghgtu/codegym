let n = Number(prompt("Nhập số nguyên dương n:"));

if (isNaN(n) || n <= 0) {
  console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
} else {
console.log("Góc vuông dưới trái:");
for (let i = 1; i <= n; i++) {
  console.log("*".repeat(i));
}

console.log("Góc vuông trên trái:");
for (let i = n; i >= 1; i--) {
  console.log("*".repeat(i));
}

console.log("Góc vuông dưới phải:");
for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(n - i) + "*".repeat(i));
}

console.log("Góc vuông trên phải:");
for (let i = n; i >= 1; i--) {
  console.log(" ".repeat(n - i) + "*".repeat(i));
}

}