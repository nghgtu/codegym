let number = parseInt(+prompt("Nhap so nguyen to dau tien can tim: "));

let primeArr = [];

generatePrimeNumber = (number) => {
    if (isNaN(number) || number <= 0) {
        alert("Nhap so lan khong hop le")
        return;
    } else {
        if (number === 1) {
            primeArr.push(2);
        } else {
            primeArr.push(2);
            number--;
            for(let n = 3; number > 0 ;n++) {
                let i = 2;
                let prime = true;
                while(i <= primeArr[primeArr.length-1]) {
                    if (n % i === 0) {
                        prime = false;
                        break;
                    }
                    i++;
                }
                if (prime) {
                    primeArr.push(n);
                    number--;
                }
            }
        }
        return primeArr.join("&nbsp;");
    }
}

document.getElementById("result").innerHTML = generatePrimeNumber(number);