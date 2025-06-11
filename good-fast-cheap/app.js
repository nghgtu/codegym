window.onload = function() { 
    document.getElementById("good").checked = false;
    document.getElementById("cheap").checked = false;
    document.getElementById("fast").checked = false;
}

var curr = null, closest = null, dropped = null;

toggle = (id) => {
    if (curr === null) {
        curr = id;
    } else if (curr !== id && closest === null) {
        closest = curr;
        curr = id;
    } else if (curr !== id && closest !== null) {
        dropped = closest;
        closest = curr;
        curr = id;
        document.getElementById(dropped).checked = false;
    } else {
        alert("unsolved cases")
    }
}


