alert("fdjbjfbs");
let fib = [0, 1]; 
let i = 2;
fib[i] = 1;
// alert(!(fib[i] % 5 == 0));
// for (;!(fib[i] % 5 == 0); i++) {
//   alert(`Dãy số Fibonacci a:` + fib[i]);
//   fib[i] += fib[i-1]; 
//   alert(`Dãy số Fibonacci b:` + fib[i]);
//   // if (fib[i] % 5 === 0) {
//   //   break;
//   // }
// }

for (;!(fib[i] % 5 == 0);) {
  // alert(`Dãy số Fibonacci a:` + fib[i]);
  fib[++i] = fib[i-1] + fib[i-2]; 
  // alert(`Dãy số Fibonacci b:` + fib[i]);
}
  
// for (let i = 2;!(fib[i] % 5 == 0); fib[i] = (fib[i-1] + fib[i-2])) {
//   alert(`Dãy số Fibonacci a:` + fib[i]);
//   i++;
//   alert(`Dãy số Fibonacci b:` + fib[i]);
// }
document.writeln(`Dãy số Fibonacci : ${fib}`);
