let fib = [0, 1]; 
let total = 1;
for (let i = 2; i < 20; i++) {
  fib[i] = fib[i-1] + fib[i-2];
  total += fib[i];
}
document.writeln(`Tổng 20 số Fibonacci đầu tiên: ${total}`);
