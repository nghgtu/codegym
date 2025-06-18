let count = 0;
let line = "TÔI LÀ MỘT ĐỨA NGỐC!!".split("");
let str = "";
let input = document.getElementById("fake-txta");

document.getElementById("fake-txta").addEventListener("keydown", (e) => {
    
    if ((e.key >= "a" && e.key <= "z") || (e.key >= "A" && e.key <= "Z") ) {
        
        input.value = "";    
        // console.log("0 " + e.key);
        // console.log("1 " + input.value);
        
        if (count > line.length-1) {
            // console.log("2 " + input.value);
            // console.log("3 " + count);
            
            // console.log("4 " + count);
            str = "";
            input.value = str;
            // console.log("4' " + input.value);
            count = 0;
        }
        
        if (count >= 0 && count <= line.length-1) {
            // input.value -= e.key.toString;
            // console.log("5 " + count);
            // console.log("6 " + input.value);
            str += line[count];
            // console.log("6' " + str);
            // console.log("7 " + input.value);
            input.value = str;
            // console.log("7' " + count);
            // e.target.value += line[count];
            
            console.log("8 " + count);
            // console.log("9 " + input.value);
            count++;
            // console.log("10 " + count);
        }
    }
}) 