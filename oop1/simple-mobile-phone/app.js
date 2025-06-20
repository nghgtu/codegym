/**
 * Mô tả
Viết một lớp Mobile đại diện cho các đối tượng điện thoại, với các đặc điểm và chức năng như sau:

Đặc điểm:
Trạng thái pin: Giá trị số nguyên, tối đa 100.
Vùng nhớ:
Tin nhắn đang soạn thảo.
Hộp thư đến (inbox).
Tin nhắn đã gửi.
Chức năng:
Kiểm tra trạng thái điện thoại (bật/tắt).
Bật và tắt điện thoại.
Sạc pin.
Soạn tin nhắn.
Gửi tin nhắn tới một chiếc Mobile khác.
Nhận tin nhắn từ một chiếc Mobile khác.
Xem tin nhắn trong hộp thư đến.
Xem tin nhắn đã gửi.
Lưu ý:
Mỗi lần sử dụng chức năng, pin giảm 1 đơn vị.
Các chức năng không hoạt động nếu điện thoại chưa bật.
Yêu cầu bài tập
Tạo một lớp Mobile:
Khai báo các thuộc tính cần thiết.
Bổ sung các phương thức xử lý.
Tạo các đối tượng:
Khởi tạo hai đối tượng: Nokia và iPhone.
Nokia soạn tin nhắn và gửi cho iPhone.
iPhone kiểm tra hộp thư đến và hiển thị tin nhắn.
 */

class Inbox {
    // prevSentMsg maybe string array
    constructor(fromMobilePhone, msg, prevSentMsg) {
        this.fromMobilePhone = fromMobilePhone;
        this.msg = msg;
        this.prevSentMsg = prevSentMsg;
    }
}


class Memory {
    constructor(composingMsg, inbox, sentMsg) {
        this.composingMsg = composingMsg; // String
        this.inbox = inbox; // may need another class or object
        this.sentMsg = sentMsg; // may need another class or object
    }
}

class MobilePhone {
    mode = ""; // On or Off
    constructor(battery_energy, memory) {
        this.battery_energy = battery_energy;
        this.memory = memory;
    }

    getBatteryInfo() {
        this.battery_energy -= 1;
        return this.battery_energy; // 0 - 100
    }

    switchOnOff() {
        if (mode == "Off" ) {
            this.mode = "On";
        } else if (mode == "On") {
            this.mode = "Off";
        }
        this.battery_energy -= 1;
    }

    reCharged() {
        this.battery_energy = 100;
    }

    msgCompose(text) {
        this.memory.composingMsg = text;
        this.battery_energy -= 1;
    }

    msgSend(text, mbphOther) {
        // this.msgCompose(text); 
        // this.memory.sentMsg.push(text, mbphOther);
        this.memory.composingMsg = "";
        this.battery_energy -= 1;
    }

    checkInbox() {
        this.battery_energy -= 1;
        return this.memory.inbox.toString();
    }

    checkSentMsg() {
        this.battery_energy -= 1;
        return this.memory.sentMsg.toString();
    }

}