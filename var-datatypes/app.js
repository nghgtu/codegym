let i = 10;
let f = 20.5;
let b = true;
let s = "Hà Nội";

document.write('i = ' + i)
document.write('<br/>');
document.write('f = ' + f);
document.write('<br/>');
document.write('b = ' + b);
document.write('<br/>');
document.write('s = ' + s);
document.write('<br/>');

let width = 20;
let height = 10;
let area = width * height;

document.write('Area = ' + area);

let _a = window.prompt("Nhap so a: ");
let _b = window.prompt("Nhap so b: ");

if (_a % _b == 0) {
    window.alert(`So a ${_a} chia het cho so b ${_b}`);
} else {
    window.alert(`So a ${_a} khong chia het cho so b ${_b}`);
}
