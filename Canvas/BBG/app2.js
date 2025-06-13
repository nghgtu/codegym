function eventHandler(e){
   switch (e.key) {
   case "ArrowLeft":  
       nbar.rx -= 50;
       // Prevent the bar from going out of left bound
    if (nbar.rx - nbar.rw < 0){
      nbar.rx = 0;
    }
   break;

   // Prevent the bar from going out of right bound
   case "ArrowRight": 
       nbar.rx += 50;
    if (nbar.rx + nbar.rw > nGame.width){
      nbar.rx = nGame.width - nbar.rw;
     }
   break;
   }
}

class Ball {
    radius = 10;
    dx;
    dy;
    constructor(cx, cy, speed, startDirection) {
        this.cx = cx;
        this.cy = cy;
        // this.angle = angle;
        this.speed = speed;
        this.dx = 1 * speed;
        this.dy = 1 * speed;
        this.startDirection = startDirection;
    }

    updateBall(gboard) {
      let gw = gboard.width;
      let gh = gboard.height;
      // gboard.context = gboard.gboard.context;

      requestAnimationFrame(updateBall(gboard));
      gboard.context.clearRect(0, 0, gw, gh);

      // Draw the game board
      gboard.context.fillStyle = 'azure';
      gboard.context.fillRect(0, 0, gw, gh);

      // Draw the ball
      gboard.context.beginPath();
      gboard.context.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2, false);
      gboard.context.strokeStyle = 'black';
      gboard.context.lineWidth = 1;
      gboard.context.stroke();
      gboard.context.fillStyle = "yellow";
      gboard.context.fill();
      
      this.dx = (this.startDirection === 1) ? (this.dx) : -(this.dx);

      this.cx += this.dx;
      this.cy += this.dy;

      // bounce off the walls
      if (this.cx + this.radius > gw || this.cx - this.radius < 0){
        this.dx = -(this.dx);
      } 

      // Bounce off the top
      if (this.cy - this.radius < 0){
          this.dy = -(this.dy);
      }

      if (this.cy + this.radius > this.ry && this.cy + this.radius < this.ry + this.rh){
          // Check if the ball hits the paddle
        if(this.cx + this.radius > this.rx && this.cx - this.radius < this.rx + this.rw ){
          this.dy = -(this.dy);
          gboard.score += 1;// gameboard score 
        } 
      }  else if (this.cy + this.radius > gh) {
        // If it doesn't hit the paddle, restart the game
          this.restart(gboard);
        }

      gboard.context.font = "20px Arial";
      gboard.context.fillStyle = 'black';
      gboard.context.fillText(`Score: ${score}`, 30, 30);
  } 
    restart(gboard){
      gw = gboard.width;
      this.cx = Math.floor(Math.random() * (gw - 80)) + 40; 
      this.cy = 15;
      this.radius = 10;
      this.startDirection = Math.round(Math.random() * 1);
      this.speed = Math.floor(Math.random() * 10) + 1; 
      this.dx = (1 * this.speed);
      this.dy = (1 * this.speed);
      // return new Ball(Math.floor(Math.random() * (gw - 80)) + 40, 15, 3, Math.round(Math.random() * 1));
      
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
      requestAnimationFrame(moveBar(gboard));
      gboard.context.fillStyle = 'blue';
      gboard.context.fillRect(this.rx, this.ry, this.rw, this.rh);
    }
}
 
class GameBoard {
  score = 0;
  constructor(context, width, height) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.context.fillStyle = 'azure';
    this.context.fillRect(0, 0, this.width, this.height);
  }

    init(ball, bar) {
      ball.updateBall(this);
      bar.moveBar(this);
  }

}

const canvas = document.getElementById("canvas");
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

let context = canvas.getContext('2d');

let nGame = new GameBoard(context, WIDTH, HEIGHT);

let r_speed = Math.floor(Math.random() * 10) + 1; // Random speed between 1 and 10
let sDir = Math.round(Math.random() * 1);

let nball = new Ball(Math.floor(Math.random() * (WIDTH - 80)) + 40, 15, r_speed, sDir);
let nbar = new Bar(300, 210, 8, 80);

nGame.init(nball, nbar);

window.addEventListener("keydown", eventHandler, true);