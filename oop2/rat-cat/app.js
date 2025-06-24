function Rat(name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = true;

    this.makeSound = function() {
        console.log("chit chit");
    }

    this.updateStatus = function() {
        if (this.weight <= 0) {
            this.status = false;
        }
    }

    this.getStatus = function() {
        if (this.status) {
            console.log("Chuột sống");
        } else {
            console.log("Chuột chết");
        }
    }
}

function Cat(name, weight, maxSpeed) {
    this.name = name;
    this.weight = weight;
    this.maxSpeed = maxSpeed;

    this.makeSound = function() {
        console.log("meow meow");
    }

    this.getWeightCat = function() {
        return this.weight;
    }

    this.catchRat = function(rat) {
        if (this.maxSpeed > rat.speed && rat.length <= 1) {
            console.log("Catch It!");
            return true;
        }
        console.log("Not catching it!");
        return false;
    }

    this.eatRat = function(rat) {
        if (this.catchRat(rat) == true) {
            this.weight += rat.weight;
            rat.weight = 0;
            rat.updateStatus();
            console.log("Eat it!"); 
        }
    }
}

let Jerry = new Rat("Jerry", 10, 150);
let Tom = new Cat("Tom", 30, 200);

Jerry.updateStatus();

Tom.catchRat();
Tom.eatRat();
console.log(Tom.getWeightCat());