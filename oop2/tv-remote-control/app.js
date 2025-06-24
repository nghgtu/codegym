function Remote(code,tv) {
    this.channel = "";
    this.code = code;
    this.tv = tv;

    this.setChannel = function(channel) {
        this.tv.channel = channel;
    }

    this.setVolume = function(volume) {
        this.tv.volume = volume;
    }
}

function Tivi(channel, volume) {
    this.status = true;
    this.channel = channel;
    this.volume = volume;

    this.getStatus = function() {
        if (this.status) {
            console.log("Tivi is On")
        } else {
            console.log("Tivi is Off")
        }
    }

    this.turnOn = function() {
        this.status = true;
    }

    this.turnOff = function() {
        this.status = false;
    }

    this.getChannelTV = function() {
        return this.channel;
    }

    this.getVolumeTV = function() {
        return this.volume;
    }

    this.setChannelTV = function(new_channel) {
        this.channel = new_channel;
    }

    this.setVolumeTV = function(new_volume) {
        this.volume = new_volume;
    }
}


let Sony = new Tivi(43, 10);
let remote1 = new Remote(1, Sony);

Sony.turnOn();
Sony.getStatus();
Sony.setChannelTV(7);
console.log(Sony.getChannelTV());

remote1.setChannel(3);
remote1.setVolume(12);
console.log(Sony.getChannelTV());
console.log(Sony.getVolumeTV());

Sony.turnOff();
Sony.getStatus();