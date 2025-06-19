class Ball {
  radius = 10;
  dx;
  dy;
  constructor(cx, cy, speed, startDirection) {
      this.cx = cx;
      this.cy = cy;
      // this.angle = angle; angle <- random game seed, like speed and startDirection
      this.speed = speed;
      this.dx = 1 * speed;
      this.dy = 1 * speed;
      this.startDirection = startDirection;
  }

  updateBall(gboard, bar) {
    requestAnimationFrame(() => {
      this.updateBall(gboard, bar);
            
    } );

    let gw = gboard.width;
    // alert(gw);
    let gh = gboard.height;
    // alert(gh);
    let ctx = gboard.context;

    // // reDraw the game board
    //   gboard.reDraw();
    ctx.clearRect(0, 0, gw, gh);
    ctx.fillStyle = 'azure';
    ctx.fillRect(0, 0, gw, gh);

    // Draw the ball
    ctx.beginPath();
    ctx.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = "yellow";
    ctx.fill();
    
    // this.dx *= (this.startDirection === 1) ? 1 : -1;
    // this.cx += this.dx;
    this.cx += (this.startDirection === 1) ? (this.dx) : -(this.dx);
    this.cy += this.dy;

    // bounce off the walls
    if (this.cx + this.radius > gw || this.cx - this.radius < 0){
      this.dx = -(this.dx);
    } 

    // Bounce off the top
    if (this.cy - this.radius < 0){
        this.dy = -(this.dy);
    }

    // if (this.cy + this.radius > bar.ry /*&& this.cy + this.radius < bar.ry + bar.rh*/){
    //     // Check if the ball hits the paddle
    //   if (this.cx + this.radius > bar.rx && this.cx - this.radius < bar.rx + bar.rw ){
    //     this.dy = -(this.dy);
    //     gboard.score += 1;
    //   } 
    // }
    if (this.cy + this.radius > gh) {
      // If it doesn't hit the paddle, restart the game
        this.restart(gboard);
    }

    ctx.font = "20px Arial";
    ctx.fillStyle = 'black';
    ctx.fillText(`Score: ${gboard.score}`, 30, 30);
    ctx.fillText(`Speed: ${this.speed}`, 400, 30);
  } 

  restart(gboard){
    let gw = gboard.width;
    this.cx = Math.floor(Math.random() * (gw - 80)) + 40; 
    this.cy = 15;
    this.radius = 10;
    this.startDirection = Math.round(Math.random() * 1);
    this.speed = Math.floor(Math.random() * 6) + 1; 
    this.dx = (1 * this.speed);
    this.dy = (1 * this.speed);
    // return new Ball(Math.floor(Math.random() * (gw - 80)) + 40, 15, Math.floor(Math.random() * 6) + 1, Math.round(Math.random() * 1));
    gboard.score = 0;
  }
}

class Bar {
  constructor(rx, ry, rw, rh) {
      this.rx = rx;
      this.ry = ry;
      this.rw = rw;
      this.rh = rh;
  }

  moveBar(gboard) {
    requestAnimationFrame(() => this.moveBar(gboard));
    gboard.context.fillStyle = 'blue';
    gboard.context.fillRect(this.rx, this.ry, this.rw, this.rh);
  }
}
 
function moveEHandler(e, nGame, bar, r_speed){
      switch (e.key) {
      case "ArrowLeft":  
          bar.rx -= 40 * r_speed;
          // Prevent the bar from going out of left bound
        if (bar.rx - bar.rw < 0){
          bar.rx = 0;
        }
      break;

      // Prevent the bar from going out of right bound
      case "ArrowRight": 
          bar.rx += 40 * r_speed;
        if (bar.rx + bar.rw > nGame.width){
          bar.rx = nGame.width - bar.rw;
        }
      break;
    }
}

// function spdEHander(e, ball) {
//   switch (e.key) {
//     case "ArrowUp":  
//         ball.speed += 1;
//         ball.dx = (1 * ball.speed);
//         ball.dy = (1 * ball.speed);
//     break;
//     case "ArrowDown":  
//         if (ball.speed > 1) {
//           ball.speed -= 1;
//           ball.dx = (1 * ball.speed);
//           ball.dy = (1 * ball.speed);
//         }
//     break;
//   }
// }

class GameBoard {
  score = 0;
  constructor(context, width, height) {
    this.context = context;
    this.width = width;
    this.height = height;
  }

  // reDraw() {
  //   requestAnimationFrame(() => this.reDraw());
  //     let ctx = this.context;
  //     ctx.clearRect(0, 0, gw, gh);
  //     ctx.fillStyle = 'azure';
  //     ctx.fillRect(0, 0, gw, gh);
  // }

    init(ball, bar) {
      // reDraw();
      ball.updateBall(this, bar);
      bar.moveBar(this);
  }
}

// window.innerWidth = "600";
// window.innerHeight = "400";

// window.resizeTo(600, 400);
// alert(`Window Width: ${window.innerWidth}, Window Height: ${window.innerHeight}`);
// window.addEventListener("resize", function() {
//   const newWidth = window.width;
//   const newHeight = window.height;
//   alert(`New Window Width: ${newWidth}, New Window Height: ${newHeight}`);
// }, true);

const canvas = document.getElementById("canvas");
// canvas.style = "width: 500px; height: 250px;";
//  canvas.width = window.innerWidth;
//  canvas.height = window.innerHeight;

const WIDTH = canvas.width;
// alert(WIDTH);
const HEIGHT = canvas.height;
// alert(HEIGHT);
// alert(`Canvas Width: ${WIDTH}, Canvas Height: ${HEIGHT}`);

let context = canvas.getContext('2d');

let nGame = new GameBoard(context, WIDTH, HEIGHT);

let r_speed = Math.floor(Math.random() * 6) + 1; // Random speed between 1 and 10
let sDir = Math.round(Math.random() * 1);

let nball = new Ball(Math.floor(Math.random() * (nGame.width - 80)) + 40, 15, r_speed, sDir);
let nbar = new Bar(300, 210, 80, 8);

nGame.init(nball, nbar);

window.addEventListener("keydown", function(e) { moveEHandler(e, nGame, nbar, r_speed); }, true);
// window.addEventListener("keydown", function(e) { spdEHander(e, nball); }, true);