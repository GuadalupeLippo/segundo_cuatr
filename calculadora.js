var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.suma = function (a, b) {
        return a + b;
    };
    ;
    Calculadora.prototype.resta = function (a, b) {
        return a - b;
    };
    ;
    Calculadora.prototype.multiplicacion = function (a, b) {
        return a * b;
    };
    ;
    Calculadora.prototype.division = function (a, b) {
        if (b === 0)
            return "no puede dividir por cero";
        return a / b;
    };
    ;
    return Calculadora;
}());
var calc01 = new Calculadora();
console.log(calc01.suma(5, 8));
console.log(calc01.resta(5, 8));
console.log(calc01.multiplicacion(5, 8));
console.log(calc01.division(50, 2));
console.log(calc01.division(2, 0));
