function Hero(image, top, left, size, speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function(){
      return `<img width="${this.size}" 
                height="${this.size}" 
                src="${this.image}" 
                style="top: ${this.top}px; left: ${this.left}px; position: absolute;" />`;
  }

  this.moveRight = function(){
    this.left += this.speed;
    // console.log('ok: ' + this.left);
  }

  this.moveLeft = function() {
    this.left -= this.speed;
  }

  this.moveUp = function() {
    this.top -= this.speed;
  }

  this.moveDown = function() {
    this.top += this.speed;
  }
}

let spd = parseInt(prompt("enter the game's speed:"));

var hero = new Hero("https://picsum.photos", 20, 30, 200, spd);

function start(){
  if(hero.left < window.innerWidth - hero.size){
    hero.moveRight();
  }

  // if(hero.top < window.innerHeight - hero.size){
  //   hero.moveDown();
  // }

  // if (hero.left > 0 && (hero.left <= window.innerWidth - hero.size)) {
  //   hero.moveLeft();
  // }

  // if(hero.top > 0 && (hero.top < window.innerHeight - hero.size)) {
  //   hero.moveUp();
  // }

  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 300);
}

start();

// window.addEventListener("keypress", oMoveRight = (e) => {
//   if (e.key === "ArrowRight") {
//     if(hero.left < window.innerWidth - hero.size){
//       hero.moveRight();
//     }
//     requestAnimationFrame(oMoveRight);
//   }
// })