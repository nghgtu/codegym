    let canvas = null;
    
    class Bar{
        constructor(currXPos) {
            this.currXPos = currXPos;
        }

        drawBar(newXPos) {
            this.currXPos = newXPos;
        }

        moveLeft() {
            this.currXPos -= 40;
        }

        moveRight() {
            this.currXPos += 40;
        }
}

init = () => {
    canvas = document.getElementById("myCanvas");
}

draw = () => {
    // Set initial position
    let bar = document.getElementById("bar");
    alert(bar);
    let left = parseInt(bar.style.left.replace("px", ""));
    alert(left);
    let initBar = new Bar(left);    
    alert(initBar);

}

window.onload = init;

window.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        draw();
    } 
});
