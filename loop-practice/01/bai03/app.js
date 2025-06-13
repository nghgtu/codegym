let fib = [0, 1]; 

for (let i = 2; i < 20; i++) {
  fib[i] = fib[i - 1] + fib[i - 2]; 
}

for (let i = 0; i < 20; i++) {
  document.writeln(`Fibonacci số ${i + 1}: ${fib[i]}`);
}
