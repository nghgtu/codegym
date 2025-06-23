// class Inbox {
//     // prevSentMsg maybe string array
//     constructor(fromMobilePhone, msg, prevSentMsg) {
//         this.fromMobilePhone = fromMobilePhone;
//         this.msg = msg;
//         this.prevSentMsg = prevSentMsg;
//     }
// }

// let oMessage = {
//     fromMobilePhone: "",
//     toMobilePhone: "",
//     content: [""]
// }

class InboxMessage {
    constructor(msg="", fromMobile) {
        this.msg = msg;
        this.fromMobile = fromMobile;
    }
    viewInbox() {
        console.log(`${this.msg} da duoc nhan boi ${this.fromMobile}`);
    }
}

class SentMessage {
    constructor(msg="", toMobile) {
        this.msg = msg;
        this.toMobile = toMobile;
    }
    viewSentMsg() {
        console.log(`${this.msg} da duoc gui den ${this.toMobile}`);
    }
}

class ComposingMessage {
    constructor(msg="", toMobile) {
        this.msg = msg;
        this.toMobile = toMobile;
    }
    sendMsg(memory) {
        memory.sentMsg = new SentMessage(this.msg, this.toMobile);
    }
}


// let  oInbox = {
//     fromMobilePhone: "",
//     msg: [""],
//     prevSentMsg: [""]
// }

// let oMemory = {
//     composingMsg: "",
//     inbox: oInbox,
//     sentMsg: oInbox.prevSentMsg
// }

class Memory {
    constructor(composingMsg, inbox, sentMsg) {
        this.composingMsg = composingMsg; 
        this.inbox = inbox; 
        this.sentMsg = sentMsg;
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

    setMode(_mode) {
        this.mode = _mode;
    }

    decreaseBattery() {
        const btr = this.battery_energy;
        if (btr <= 1) {
            this.battery_energy = 0;
            this.setMode("Off");
        } else {
            this.battery_energy -= 1;
        }
    }

    getBatteryInfo() {
        if (this.getMode() == "On") {
            this.decreaseBattery();
            return this.battery_energy; // 1 - 100
        }
        else {
            alert("May da het pin! Hay sac pin!!!");
        }
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

    msgCompose(text, mbphOther) {
        this.memory.composingMsg = new ComposingMessage(text, mbphOther);
        this.decreaseBattery();
    }

    msgSend(text, mbphOther) {
        this.memory.composingMsg = new ComposingMessage(text, mbphOther);
        this.decreaseBattery();
    }

    checkInbox() {
        this.memory.inbox.viewInbox();
        this.decreaseBattery();
    }

    checkSentMsg() {
        this.memory.sentMsg.viewSentMsg();
        this.decreaseBattery();
    }

}

