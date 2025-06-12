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

    animateCircle(gboard) {
      let gw = gboard.width;
      let gh = gboard.height;

      requestAnimationFrame(animateCircle(gboard));
      context.clearRect(0, 0, gw, gh);

      // Draw the game board
      context.fillStyle = 'azure';
      context.fillRect(0, 0, gw, gh);

      // Draw the ball
      context.beginPath();
      context.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2, false);
      context.strokeStyle = 'black';
      context.lineWidth = 1;
      context.stroke();
      context.fillStyle = "yellow";
      context.fill();
      
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

      if (this.cy + this.radius > this.ry && this.cy + this.radius < this.ry + this.rh){
          // Check if the ball hits the paddle
        if(this.cx + this.radius > this.rx && this.cx - this.radius < this.rx + this.rw ){
          this.dy = -(this.dy);
          score += 1;// gameboard score 
        } 

      }  else if (this.cy + this.radius > gh) {
        // If it doesn't hit the paddle, restart the game
          this.restart(gboard);
        }

      context.font = "20px Arial";
      context.fillStyle = 'black';
      context.fillText(`Score: ${score}`, 30, 30);
  } 
    restart(gboard){
      this.cx = Math.floor(Math.random() * (gw - 80)) + 40; 
      this.cy = 15;
      this.dx = 3;
      this.dy = 3;
      this.startDirection = Math.round(Math.random() * 1);
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

    movingBar(gboard) {
      requestAnimationFrame(movingBar(gboard));
      context = gboard.context;
      context.fillStyle = 'blue';
      context.fillRect(this.rx, this.ry, this.rw, this.rh);
    }
}
 
class GameBoard {
  score = 0;
    constructor(width, height) {
      this.width = width;
      this.height = height;
      context.fillStyle = 'azure';
      context.fillRect(0, 0, this.width, this.height);
    }

    init(ball, bar) {
      ball.animateCircle(this);
      bar.movingBar(this);
  }

}

const canvas = document.getElementById("canvas");
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

let context = canvas.getContext('2d');

let nGame = new GameBoard(WIDTH, HEIGHT);

let r_speed = Math.floor(Math.random() * 10) + 1; // Random speed between 1 and 10

let nball = new Ball(Math.floor(Math.random() * (WIDTH - 80)) + 40, 15, r_speed, Math.round(Math.random() * 1));
let nbar = new Bar(300, 210, 8, 80);

nGame.init(nball, nbar);

window.addEventListener("keydown", eventHandler, true);