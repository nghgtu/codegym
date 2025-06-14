let x = 0;
let array = Array();

function add_element_to_array() {
    let element = document.getElementById("txtValue").value;
    if (element === "") {
        alert("Please enter a value");
        return;
    } 
    array[x] = element;
    alert("Element: " + array[x] + " Added at index " + x);
    x++;
    document.getElementById("txtValue").value = "";
}

function display_array() {
    let e = "<hr/>";
    for (let i = 0; i < array.length; i++) {
    e += "Element " + i + " = " + array[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = e;
}