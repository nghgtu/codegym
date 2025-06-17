let MyDate = function(day, month, year) {

    this.day = day;
    this.month = month;
    this.year = year;
    
    this.getDay = function() {
        return this.day;
    }
    this.getMonth = function() {
        return this.month;
    }
    this.getYear = function() {
        return this.year;
    }
    this.setDay = function(day) {
        this.day  = day;
    }
    this.setMonth = function(month) {
        this.month  = month;
    }
    this.setYear = function(year) {
        this.year  = year;
    }
    this.setDate = function(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    this.toString = function() {
        let dd = this.getDay();
        let mm = this.getMonth();
        let yyyy = this.getYear();

        dd = (dd < 10) ? "0" + dd : dd;
        mm = (mm < 10) ? "0" + mm : mm;
                
        if (yyyy <= 9) 
            yyyy = "000" + yyyy;
        else if (yyyy <= 99) 
            yyyy = "00" + yyyy;
        else if (yyyy <= 999) 
            yyyy = "0" + yyyy;

        return dd + "/" + mm + "/" + yyyy;
    }

};

let date = new MyDate(2, 2, 2007);

date.setDay(10);
date.setMonth(10);
date.setYear(2019);
 
let day = date.getDay();

let month = date.getMonth(); 

let year = date.getYear(); 

alert(day + "/" + month + "/" + year);

let date2 = new MyDate(0,0,0);
date2.setDate(4, 6, 134);
alert(date2);