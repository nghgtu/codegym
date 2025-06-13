let principal = Number(prompt("Nhập số tiền ban đầu:"));
let months = Number(prompt("Nhập số tháng cho vay:"));  
let monthlyRate = Number(prompt("Nhập lãi suất hàng tháng (ví dụ 0.02 cho 2%):"));
let totalAmount = principal;   
for (let i = 1; i <= months; i++) {
    totalAmount += totalAmount * monthlyRate;
}   
document.writeln(`Số tiền sau ${months} tháng là: ${totalAmount.toFixed(2)}`);