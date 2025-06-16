let count = 0;
let fixedLine = "TÔI LÀ MỘT ĐỨA NGỐC!!";
document.getElementById("fake-txta").value = "";

document.getElementById("fake-txta").addEventListener("keydown", (e) => {
    if ((e.key >= "a" && e.key <= "z") || (e.key >= "A" && e.key <= "Z") ) {
        let input = document.getElementById("fake-txta");
        // input.value = "";
        console.log("0 " + e.key);
        console.log("1 " + input.value);
        
        if (count > fixedLine.length-1) {
            console.log("2 " + input.value);
            console.log("3 " + count);
            count = 0;
            console.log("4 " + count);
            input.value = "";
        }
        
        if (count >= 0 && count <= fixedLine.length-1) {
            // input.value -= e.key.toString;
            console.log("5 " + count);
            console.log("6 " + input.value);
            input.value += fixedLine[count];
            console.log("7 " + count);
            // e.target.value += fixedLine[count];
            
            // console.log("8 " + count);
            console.log("9 " + input.value);
            count++;
            console.log("10 " + count);
        }
    }
}) 