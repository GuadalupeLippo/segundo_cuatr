var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Form = /** @class */ (function () {
    function Form(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    return Form;
}());
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(ancho, alto) {
        return _super.call(this, ancho, alto) || this;
    }
    Triangulo.prototype.calcularArea = function () {
        console.log((this.ancho * this.alto) / 2);
    };
    return Triangulo;
}(Form));
var Rectangulo = /** @class */ (function (_super) {
    __extends(Rectangulo, _super);
    function Rectangulo(ancho, alto) {
        return _super.call(this, ancho, alto) || this;
    }
    Rectangulo.prototype.calcularArea = function () {
        console.log(this.ancho * this.alto);
    };
    return Rectangulo;
}(Form));
var Rec01 = new Rectangulo(10, 5);
console.log(Rec01);
Rec01.calcularArea();
var trian01 = new Triangulo(20, 4);
console.log(trian01);
trian01.calcularArea();
