let width = Number(prompt("Nhập chiều rộng của hình trái tim")); // điều chỉnh kích thước trái tim
let halfWidth = Math.floor(width / 2);

for (let i = Math.floor(halfWidth / 2); i < halfWidth; i += 2) {
  let line = "";

  // khoảng trắng bên trái
  for (let j = 1; j < halfWidth - i; j += 2) {
    line += " ";
  }

  // nửa trái tim bên trái
  for (let j = 1; j <= i; j++) {
    line += "*";
  }

  // khoảng trắng ở giữa
  for (let j = 1; j <= halfWidth - i; j++) {
    line += " ";
  }

  // nửa trái tim bên phải
  for (let j = 1; j <= i; j++) {
    line += "*";
  }

  console.log(line);
}

// phần dưới của trái tim
for (let i = halfWidth; i >= 1; i--) {
  let line = "";

  // khoảng trắng bên trái
  for (let j = 0; j < halfWidth - i; j++) {
    line += " ";
  }

  // thân trái tim
  for (let j = 1; j <= i * 2 - 1; j++) {
    line += "*";
  }

  console.log(line);
}
