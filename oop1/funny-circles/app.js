const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function Circles(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.drawCircle = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

function getRandomX() {
    return Math.random() * window.innerWidth;
}

function getRandomY() {
    return Math.random() * window.innerHeight;
}

function getRandomRadius() {
    return Math.floor(Math.random()*100);
}

function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
        return `rgb(${red},${blue},${green})`;
}

// Draw a random number of circles
function drawMultipleCircles() {
    let n = Math.floor(Math.random() * 100);
    for (let i = 0; i < n; i++) {
        let x = getRandomX();
        let y = getRandomY();
        let radius = getRandomRadius()
        let cColor = getRandomColor();

        let circle = new Circles(x, y, radius, cColor);
        circle.drawCircle();
    }
}

drawMultipleCircles();

