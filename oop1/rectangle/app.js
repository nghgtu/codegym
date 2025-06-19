const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function Rectangle(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    
}

Rectangle.prototype.getArea = function() {
    return this.width * this.height;
};

Rectangle.prototype.getPerimeter = function() {
    return 2 * (this.width + this.height);
};

Rectangle.prototype.drawRect = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}

Rectangle.prototype.displayText= function() {
    let areaOfRect = this.getArea();
    let perimtrOfRect = this.getPerimeter();

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillText(`${areaOfRect} units of area`, 10, 50);
    ctx.fillStyle = "blue";
    ctx.fillText(`${perimtrOfRect} units of area`, 200, 50);
}

const rect = new Rectangle(100, 200, 300, 140, "green");
rect.drawRect();
rect.displayText();
