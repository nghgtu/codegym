let Battery = function () {

    this.setEnergy = function (energy) {
        this.energy = energy;
    };

    this.getEnergy = function () {
        return this.energy;
    };

    this.decreaseEnergy = function () {
        if (this.energy > 0) {
            this.energy--;
        }
    }

    this.reCharging = function() {
        this.setEnergy (100);
    }
};

let FlashLamp = function () {

    this.setBattery = function (battery) {
        this.battery = battery;
    };

    this.getBatteryInfo = function () {
        this.battery.decreaseEnergy();
        return this.battery.getEnergy();
    };

    this.light = function () {
        this.battery.decreaseEnergy();
        if(this.status){
            alert("Lighting");
        } else {
            alert("Not lighting");
        }
    };

    this.turnOn = function () {
        this.battery.decreaseEnergy();
        this.status = true;
    };
    
    this.turnOff = function () {
        this.battery.decreaseEnergy();
        this.status = false;
    }
};

let battery = new Battery();
battery.setEnergy(50);

let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);

document.writeln("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");
flashLamp.light();

document.writeln("Turn on<br/>")
flashLamp.turnOn();
flashLamp.light();
document.writeln("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");

document.writeln("Turn off<br/>")
flashLamp.turnOff();
flashLamp.light();