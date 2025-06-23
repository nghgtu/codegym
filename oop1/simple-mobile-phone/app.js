// class Inbox {
//     // prevSentMsg maybe string array
//     constructor(fromMobilePhone, msg, prevSentMsg) {
//         this.fromMobilePhone = fromMobilePhone;
//         this.msg = msg;
//         this.prevSentMsg = prevSentMsg;
//     }
// }

let oMessage = {
    fromMobilePhone: "",
    toMobilePhone: "",
    content: [""]
}

let  oInbox = {
    fromMobilePhone: "",
    msg: [""],
    prevSentMsg: [""]
}

let oMemory = {
    composingMsg: "",
    inbox: oInbox,
    sentMsg: oInbox.prevSentMsg
}

class Memory {
    constructor(composingMsg, inbox, sentMsg) {
        this.composingMsg = composingMsg; // String
        this.inbox = inbox; // may need another class or object
        this.sentMsg = sentMsg; // may need another class or object
    }
}

class MobilePhone {
    mode = "On"; // On or Off
    constructor(battery_energy, memory) {
        this.battery_energy = battery_energy;
        this.memory = memory;
    }

    getMode() {
        return this.mode;
    }

    setMode(mode) {
        this.mode = mode;
    }

    decreaseBattery() {
        this.decreaseBattery();
    }

    getBatteryInfo() {
        if (this.getMode() == "On")
        this.decreaseBattery();
        return this.battery_energy; // 0 - 100
    }

    switchOnOff() {
        if (this.getMode() == "Off" ) {
            this.setMode("On");
        } else if (this.getMode() == "On") {
            this.setMode("Off");
        }
        this.decreaseBattery();
    }

    reCharged() {
        this.battery_energy = 100;
    }

    msgCompose(text) {
        this.memory.composingMsg = text;
        this.decreaseBattery();
    }

    msgSend(text, mbphOther) {
        // this.msgCompose(text); 
        // this.memory.sentMsg.push(text, mbphOther);
        this.memory.composingMsg = "";
        this.decreaseBattery();
    }

    checkInbox() {
        this.decreaseBattery();
        return this.memory.inbox.toString();
    }

    checkSentMsg() {
        this.decreaseBattery();
        return this.memory.sentMsg.toString();
    }

}