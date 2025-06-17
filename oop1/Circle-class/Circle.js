let Circle = function(radius) {

        this.radius = radius;
        
        this.getRadius = function() {
          return radius;
      	}
        this.getArea = function() {
            return Math.PI * radius * radius;
        }

};

let circle = new Circle(1);
let radius = circle.getRadius();

let area = circle.getArea();
alert("radius: " + radius + "; area: " + area);

let circle2 = new Circle(4);
let radius2 = circle2.getRadius();

let area2 = circle2.getArea();
alert("radius: " + radius2 + "; area: " + area);
