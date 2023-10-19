var Phone = /** @class */ (function () {
    function Phone(brand, model, year, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    Phone.prototype.getBrand = function () {
        return this.brand;
    };
    Phone.prototype.getModel = function () {
        return this.model;
    };
    Phone.prototype.getYear = function () {
        return this.year;
    };
    Phone.prototype.makeCall = function (number) {
        console.log("Calling to ".concat(number, "..."));
    };
    Phone.prototype.getColor = function () {
        return this.color;
    };
    return Phone;
}());
var Television = /** @class */ (function () {
    function Television(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.channel = 0;
    }
    Television.prototype.getBrand = function () {
        return this.brand;
    };
    Television.prototype.getModel = function () {
        return this.model;
    };
    Television.prototype.getYear = function () {
        return this.year;
    };
    Television.prototype.changeChannel = function (channel) {
        this.channel = channel;
    };
    Television.prototype.getChannel = function () {
        return this.channel;
    };
    return Television;
}());
var nokia = new Phone("nokia", "c3", 2003, "negro");
console.log(nokia);
nokia.makeCall("55");
var tele01 = new Television("noblex", "nose", 2012);
tele01.changeChannel(20);
console.log(tele01.getBrand());
console.log(tele01.getChannel());
