document.getElementById("My-Canvas").width = window.innerWidth * 0.97;
document.getElementById("My-Canvas").height = window.innerHeight * 0.97;

let canvas = document.getElementById("My-Canvas");
let ctx = canvas.getContext("2d");
let carImg = document.getElementById("car-icon");

// carImg.addEventListener("load", function(e) {
//     setTimeout(ctx.drawImage(carImg, 20, 20, 100, 100), 100);
// } ) ;

class Car{
    constructor(imgSrc, dx, dy, width, height) {
        this.imgSrc =imgSrc;
        this.dx = dx;
        this.dy = dy;
        this.width = width;
        this.height = height;
    }

    draw() {
        // requestAnimationFrame(this.draw);
        // ctx.clearRect(this.dx, this.dy, this.width, this.height);
        ctx.drawImage(carImg, this.dx, this.dy, this.width, this.height);
    }
}

class Reward{
    constructor(imgSrc, dx, dy, width, height, bonus){
        this.imgSrc = imgSrc;
        this.dx = dx;
        this.dy = dy;
        this.width = width;
        this.height = height;
        this.bonus = bonus;
    }

    draw() {
        // requestAnimationFrame(this.draw);
        // ctx.clearRect(this.dx, this.dy, this.width, this.height);
        ctx.drawImage(this.imgSrc, this.dx, this.dy, this.width, this.height);
    }
}


class Obstacle{
    constructor(imgSrc, dx, dy, width, height, punishment){
        this.imgSrc = imgSrc;
        this.dx = dx;
        this.dy = dy;
        this.width = width;
        this.height = height;
        this.punishment = punishment;
    }

    draw() {
        // requestAnimationFrame(this.draw);
        // ctx.clearRect(this.dx, this.dy, this.width, this.height);
        ctx.drawImage(this.imgSrc, this.dx, this.dy, this.width, this.height);
    }
}



