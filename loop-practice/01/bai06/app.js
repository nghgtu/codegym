let total = 1;
let count = 0;
for (let n = 2; count <= 30; n++) {
  if (n % 7 == 0) {
    total += n;
    count++;
  }
}
document.writeln(`Tổng 30 số chia hết cho 7 đầu tiên: ${total}`);