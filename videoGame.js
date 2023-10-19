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
var Personaje = /** @class */ (function () {
    function Personaje(nombre, vida, energia) {
        if (vida === void 0) { vida = 3; }
        if (energia === void 0) { energia = 20; }
        this.nombre = nombre;
        this.vida = vida;
        this.energia = energia;
    }
    Personaje.prototype.getnombre = function () {
        console.log(this.nombre);
        ;
    };
    Personaje.prototype.atacar = function () {
        this.energia = this.energia - 5;
        console.log("energia: ", this.energia);
        if (this.energia === 0) {
            this.vida = this.vida - 1;
            console.log("Te quedan", this.vida, "vidas");
        }
    };
    Personaje.prototype.curar = function () {
        this.energia = this.energia + 5;
        console.log("energia: ", this.energia);
        if (this.energia === 20) {
            this.vida = this.vida + 1;
            console.log("conseguiste otra vida, te quedan:", this.vida);
        }
    };
    Personaje.prototype.info = function () {
        console.log("nombre:", this.nombre, "\n vidas:", this.vida, "\n energia:", this.energia);
    };
    return Personaje;
}());
var Guerrero = /** @class */ (function (_super) {
    __extends(Guerrero, _super);
    function Guerrero(nombre, fuerza) {
        if (fuerza === void 0) { fuerza = 50; }
        var _this = _super.call(this, nombre) || this;
        _this.fuerza = fuerza;
        return _this;
    }
    Guerrero.prototype.usarEscudo = function () {
        this.fuerza = this.fuerza - 5;
        console.log("fuerza:", this.fuerza);
    };
    return Guerrero;
}(Personaje));
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre, mana) {
        if (mana === void 0) { mana = 50; }
        var _this = _super.call(this, nombre) || this;
        _this.mana = mana;
        return _this;
    }
    Mago.prototype.lanzarHechizo = function () {
        this.mana = this.mana - 5;
        console.log("mana:", this.mana);
    };
    return Mago;
}(Personaje));
var mago01 = new Mago("pedro");
console.log(mago01);
mago01.atacar();
mago01.atacar();
mago01.atacar();
mago01.atacar();
mago01.curar();
mago01.curar();
mago01.getnombre;
mago01.info();
mago01.lanzarHechizo();
mago01.lanzarHechizo();
mago01.atacar();
mago01.atacar();
mago01.curar();
mago01.curar();
mago01.curar();
mago01.curar();
var guerr01 = new Guerrero("gods");
console.log(guerr01);
guerr01.getnombre();
guerr01.usarEscudo();
guerr01.usarEscudo();
guerr01.info();
