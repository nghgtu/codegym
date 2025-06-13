let temperature ;

do {
  temperature = Number(+prompt("Nhập nhiệt độ hiện tại:"));

  if (isNaN(temperature)) {
    alert("Vui lòng nhập một số hợp lệ!");
    continue;
  }

  if (temperature > 100) {
    alert("Nhiệt độ quá cao, vui lòng giảm nhiệt độ.");
  } else if (temperature < 20) {
    alert("Nhiệt độ quá thấp, vui lòng tăng nhiệt độ.");
  }
} while(temperature !== -1);