let width = Number(prompt("Nhập chiều rộng hình chữ nhật:"));  
let height = Number(prompt("Nhập chiều cao hình chữ nhật:"));  

for (let i = 1; i <= height; i++) {
  if (i === 1 || i === height) {
    console.log("*".repeat(width));
  } else {
    console.log("*" + " ".repeat(width - 2) + "*");
  }
}