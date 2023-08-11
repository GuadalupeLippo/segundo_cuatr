var Person = /** @class */ (function () {
    function Person(name, age) {
        if (name === void 0) { name = ""; }
        if (age === void 0) { age = 0; }
        this.name = name;
        this.age = age;
    }
    Person.prototype.setName = function (name) {
        this.name = name;
        console.log(this.name);
    };
    ;
    Person.prototype.setAge = function (age) {
        this.age = age;
        console.log(this.age);
    };
    ;
    Person.prototype.getInfo = function () {
        console.log("el nombre es ", this.name);
        console.log("la edad es", this.age);
    };
    return Person;
}());
;
var Pers01 = new Person();
console.log(Pers01);
Pers01.setName("maria");
Pers01.setAge(9);
Pers01.getInfo();
