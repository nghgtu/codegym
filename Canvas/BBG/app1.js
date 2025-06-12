let canvas = document.getElementById('canvas');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
let ctx = canvas.getContext('2d');

let cx = Math.floor(Math.random() * (WIDTH - 80)) + 40;
let cy = 15;
const radius = 10;
let rx = 300;
let ry = 210;
let rh = 8;
let rw = 80;
let r_speed = Math.floor(Math.random() * 10) + 1; // Random speed between 1 and 10  
let startDirection = Math.round(Math.random() * 1); // Random direction 0 or 1
let score = 0;
let dx = r_speed * 1; // Initial horizontal speed
let dy = r_speed * 1; // Initial vertical speed

ctx.fillStyle = 'azure';
ctx.fillRect(0, 0, WIDTH, HEIGHT);

function updateBall (){

      requestAnimationFrame(updateBall);
      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      // Draw the game board
      ctx.fillStyle = 'azure';
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      // Draw the ball
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2, false);
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = "yellow";
      ctx.fill();

    //   dx = r_speed * 1;
    //   dy = r_speed * 1;
      
      cx += (startDirection === 1) ? (dx) : -(dx);
      cy += dy;

      // bounce off the walls
      if (cx + radius > WIDTH || cx - radius < 0){
        dx = -(dx);
      } 

      // Bounce off the top
      if (cy - radius < 0){
          dy = -(dy);
      }

      if (cy + radius > ry && cy + radius < ry + rh){
          // Check if the ball hits the paddle
        if(cx + radius > rx && cx - radius < rx + rw ){
          dy = -(dy);
          score += 1;// gameboard score 
        } 

      }  else if (cy + radius > HEIGHT) {
        // If it doesn't hit the paddle, restart the game
          restart();
        }

      ctx.font = "20px Arial";
      ctx.fillStyle = 'black';
      ctx.fillText(`Score: ${score}`, 30, 30);
}

function restart(){
    cx = Math.floor(Math.random() * (WIDTH - 80)) + 40; 
    cy = 15;
    dx = r_speed * 1;
    dy = r_speed * 1;
    startDirection = Math.round(Math.random() * 1);
    r_speed = Math.floor(Math.random() * 10) + 1;
    score = 0;
}


function moveBar(){
      requestAnimationFrame(moveBar);
      //ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "blue";
      ctx.fillRect(rx, ry, rw, rh);
 }
      
 function eventHandler(e){
   switch (e.key) {
   case "ArrowLeft":  
       rx -= 50;
    if (rx - rw < 0){
      rx = 0;
    }
   break;

   case "ArrowRight":  
       rx += 50;
    if (rx + rw > WIDTH){
      rx = WIDTH - rw;
     }
   break;
   }
}

function init (){
  updateBall();
  moveBar();
}

init();
window.addEventListener('keydown', eventHandler, true);


