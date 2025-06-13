let num = parseInt(prompt("Enter a number: "));
let total = num;
while( num != -1 ) {
   // num = prompt("Enter a number: ");
   num = parseInt(prompt("Enter a number: "));
   total += num;
} 
alert("Tổng các số vừa nhập là: " + total);