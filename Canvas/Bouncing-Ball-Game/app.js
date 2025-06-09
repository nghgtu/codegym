// function draw() {
//     const myCanvas = document.getElementById("myCanvas");
//     if (myCanvas.getContext) {
//         const ctx = myCanvas.getContext("2d");
//         const WINDOW_WIDTH = 720;
//         const WINDOW_HEIGHT = 540;

//         myCanvas.width = WINDOW_WIDTH;
//         myCanvas.height = WINDOW_HEIGHT;
//         myCanvas.style.backgroundColor = "whitesmoke";

//         ctx.beginPath();
//         ctx.fillStyle = "blue";

//         let xpos = WINDOW_WIDTH / 2;
//         let ypos = WINDOW_HEIGHT - 50;
//         const _paddle = 10;
        
//         ctx.fillRect(xpos, ypos, WINDOW_WIDTH / 5, _paddle);

//         ctx.moveTo(0, ypos + (_paddle / 2));
//         ctx.lineTo(WINDOW_WIDTH, ypos + (_paddle / 2));
//         ctx.strokeStyle  = "yellow";
//         ctx.stroke();

//         let rand_xpos = Math.random() * WINDOW_WIDTH;
//         ctx.moveTo(rand_xpos, 20);
//         ctx.arc(rand_xpos, 20, 15, 0, Math.PI * 2, true);
//         ctx.fillStyle = "gray";
//         ctx.fill();
        
//         ctx.font = "30px Verdana";
//         ctx.fillStyle = "red";
//         ctx.textAlign = "center";
//         ctx.textBaseline = "middle";
//         ctx.fillText("Welcome to the Bouncing Ball Game", WINDOW_WIDTH/2, WINDOW_HEIGHT/2);

//         ctx.closePath();
//     }
// }
        const WINDOW_WIDTH = 720;
        const WINDOW_HEIGHT = 600;

        const myCanvas = document.getElementById("myCanvas");
        myCanvas.width = WINDOW_WIDTH;
        myCanvas.height = WINDOW_HEIGHT;

        let ctx = myCanvas.getContext("2d");
        let score = 0;
        
class Ball {
    color = "gray";
    radius = 15;
    dx;
    dy;
    constructor(xpos, ypos, speed) {
        this.xpos = xpos;
        this.ypos = ypos;
        // this.angle = angle;
        this.speed = speed;

        this.dx = 1 * speed;
        this.dy = 1 * speed;
    }

    draw(context) {
        context.beginPath();
        
        context.fillStyle = this.color;
        context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
        context.fill();

        context.closePath();
    }


    move(context) {
        context.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);

        this.draw(context);
        
        // Bounce off the right border
        if ( (this.xpos + this.radius) > WINDOW_WIDTH) {
            this.dx = -this.dx;
        }

        // Bounce off the left border
        if ( (this.xpos + this.radius) < 0) {
            this.dx = -this.dx;
        }

        // Bounce off the upper border
        if ( (this.ypos + this.radius) < 0) {
            this.dy = -this.dy;
        }

        // Bounce off the bottom border (or Bar)
        if ( (this.ypos + this.radius) > WINDOW_HEIGHT) {
            this.dy = -this.dy;
        }

        this.xpos += this.dx;
        this.ypos += this.dy;
    }

}

class GameBoard {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

}

class Bar {
    bHeight = 10;
    bWidth = WINDOW_WIDTH / 5;
    constructor(currXPos) {
        // this.bWidth = bWidth;
        this.currXPos = currXPos;
    }

    drawBar() {
        ctx.beginPath();
        ctx.rect(currXPos, WINDOW_HEIGHT - 50, this.bWidth, this.bHeight);
        ctx.fillStyle = "blue";
        ctx.closePath();
    }

    moveLeft(currXPos) {
        currXPos -= 40;
    }

    moveRight(currXPos) {
        currXPos += 40;
    }
}



// window.addEventListener("load", draw);

let ball_counter = 1;
let random_x = Math.random() * WINDOW_WIDTH;
let random_y = Math.random() * WINDOW_HEIGHT;

let myBall = new Ball(random_x, random_y, 10);

myBall.draw(ctx);

let updateBall = function() {
    requestAnimationFrame(updateBall);
    myBall.update();
}

updateBall();

function updateScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("SCORE: " + score, 0, 0);
}


document.addEventListener("")