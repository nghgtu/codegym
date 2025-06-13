let n = Number(prompt("Nhập số lượng số Fibonacci cần in ra:"));
if (isNaN(n) || n <= 0) {
  document.writeln("Vui lòng nhập một số nguyên dương.");
} else if (n === 1) {
  document.writeln("Fibonacci số 1: 0");
} else if (n === 2) {
  document.writeln("Fibonacci số 1: 0<br>Fibonacci số 2: 1");
} else {
  let fib = [0, 1]; 

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]; 
  }
  document.writeln("Dãy Fibonacci đầu tiên " + n + " số là:<br>");
  for (let i = 0; i < n; i++) {
    document.writeln(`Fibonacci số ${i + 1}: ${fib[i]}<br>`);
  }
  
}

