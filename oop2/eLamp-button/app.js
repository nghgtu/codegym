function SwitchButton(status, lamp) {
    this.status = status;
    this.lamp = lamp;
    
    this.connectToLamp = function(eLamp){
        this.lamp = eLamp;
    }

    this.switchOff = function(){
        this.lamp.status = false;
        this.status = false;
    }

    this.switchOn = function(){
        this.lamp.status = true;
        this.status = true;
    }
}

function ElectricLamp(status) {
    this.status = status;
 
    this.turnOff = function() {
        this.status = false;
    }

    this.turnOn = function() {
        this.status = true;
    }
}

let electricLamp_1 = new ElectricLamp(false);

let switchButton_1 = new SwitchButton(false, electricLamp_1);

for(let i = 1; i <= 10; i++) {
    console.log(switchButton_1.switchOn());
    console.log(electricLamp_1.getStatus());
    console.log(switchButton_1.switchOff());
    console.log(electricLamp_1.getStatus());
}

