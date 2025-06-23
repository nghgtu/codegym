function Apple(weight = 10) {
    this.weight = weight;

    this.decrease = function() {
        if (!this.isEmpty) {
            this.weight -= 1;
        }
        this.weight = 0;
    }

    this.isEmpty = function() {
        this.weight == 0 ? true : false;
    }

    this.getWeight = function() {
        return this.weight;
    }
}

function Human(name="", gender=true, weight=40) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.isMale = function() {
        return this.gender == true ? true : false;
    }

    this.setGender = function(g) {
        this.gender = g;
    }

    this.checkApple= function(apple) {
        return (apple.isEmpty() == false) ?
        apple.getWeight(): "The apple is empty";
    }

    this.eat = function(apple) {
        if (!apple.isEmpty()) {
            apple.decrease();
            this.weight += 1;
        }
    }

    this.say = function(speech) {
        console.log(`${speech}`);
    }

    this.getWeight = function() {
        return this.weight;
    }

    this.setWeight = function(w) {
        this.weight = w;
    }

    this.setName = function(name) {
        this.name = name;
    }

    this.getName = function() {
        return this.name;
    }
}

let adam = new Human("Adam", true, 70);
let eva = new Human("Eva", false, 55);
let apple1 = new Apple(20);
// let apple2 = new Apple(15);
// || !apple2.isEmpty()
while(!apple1.isEmpty()) {
    adam.eat(apple1);
    eva.eat(apple1);
}

alert(`Apple 1 is fully eaten!`)