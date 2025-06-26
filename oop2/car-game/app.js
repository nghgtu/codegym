document.getElementById("My-Canvas").width = window.innerWidth * 0.97;
document.getElementById("My-Canvas").height = window.innerHeight * 0.97;

let canvas = document.getElementById("My-Canvas");
let ctx = canvas.getContext("2d");

let carImg = document.getElementById("car-icon");
let obstacleImg = document.getElementById("warning-icon");
let rewardImg = document.getElementById("present-icon");

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

    draw(_canvas) {
        requestAnimationFrame(() => {
            this.draw(_canvas);
        });

        let cWidth = _canvas.width;
        let cHeight = _canvas.height;
        let context = _canvas.getContext("2d");

        context.clearRect(0, 0, cWidth, cHeight);
        context.fillStyle = "azure";
        context.fill();

        context.drawImage(this.imgSrc, this.dx, this.dy, this.width, this.height);
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
    
    draw(_canvas) {
        requestAnimationFrame(() => {
            this.draw(_canvas);
        });
        let cWidth = _canvas.width;
        let cHeight = _canvas.height;
        let context = _canvas.getContext("2d");

        context.drawImage(this.imgSrc, this.dx, this.dy, this.width, this.height);
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

    draw(_canvas) {
        requestAnimationFrame(() => {
            this.draw(_canvas);
        });
        let cWidth = _canvas.width;
        let cHeight = _canvas.height;
        let context = _canvas.getContext("2d");

        context.drawImage(this.imgSrc, this.dx, this.dy, this.width, this.height);
    }
}


function moveEHandler(event, currCanvas, currCar) {
    switch(event.key) {
        case "ArrowLeft":
            currCar.dx -= 10;
            if (currCar.dx < 0) {
                currCar.dx = 0;
            }
            break;

        case "ArrowRight":
            currCar.dx += 10;
            if (currCar.dx + currCar.width > currCanvas.width) {
                currCar.dx = currCanvas.width - currCar.width;
            }
            break;
        
        case "ArrowUp":
            currCar.dy -= 10;
            if (currCar.dy < 0) {
                currCar.dy = 0;
            }
            break;

        case "ArrowDown":
            currCar.dy += 10;
            if (currCar.dy + currCar.height > currCanvas.height) {
                currCar.dy = currCanvas.height - currCar.height;
            }
            break;
    }
        
}

let car = new Car(carImg, 50, 100, 100, 100);

let rX = Math.floor(Math.random() * canvas.width);
let rY = Math.floor(Math.random() * canvas.height);

let oX = Math.floor(Math.random() * canvas.width);
let oY = Math.floor(Math.random() * canvas.height);

let reward = new Reward(rewardImg, rX, rY, 50, 50, 50);
let obstacle = new Obstacle(obstacleImg, oX, oY, 100, 100, -100);

car.draw(canvas);
reward.draw(canvas);
obstacle.draw(canvas);

window.addEventListener("keydown", function(e) {
    moveEHandler(e, canvas, car);
})
