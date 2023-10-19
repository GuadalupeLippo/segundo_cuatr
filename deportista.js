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
var Deportista = /** @class */ (function () {
    function Deportista(nombre, edad, clasificacion) {
        this.nombre = nombre;
        this.edad = edad;
        this.clasificacion = clasificacion;
    }
    Deportista.prototype.setClasificacion = function (clasificacion) {
        this.clasificacion = clasificacion;
    };
    Deportista.prototype.getClasificacion = function () {
        return this.clasificacion;
    };
    Deportista.prototype.getNombre = function () {
        return this.nombre;
    };
    Deportista.prototype.getEdad = function () {
        return this.edad;
    };
    return Deportista;
}());
var Basquetbolista = /** @class */ (function (_super) {
    __extends(Basquetbolista, _super);
    function Basquetbolista(nombre, edad, posicion, clasificacion) {
        var _this = _super.call(this, nombre, edad, clasificacion) || this;
        _this.posicion = posicion;
        return _this;
    }
    Basquetbolista.prototype.recibirMedalla = function () {
        if (this.clasificacion === false) {
            console.log("no recibe medalla");
        }
        else {
            console.log("recibe medalla");
        }
    };
    Basquetbolista.prototype.setPosicion = function (posicion) {
        this.posicion = posicion;
        console.log(this.posicion);
    };
    Basquetbolista.prototype.getPosicion = function () {
        return this.posicion;
    };
    return Basquetbolista;
}(Deportista));
var basquetbolista1 = new Basquetbolista("matias", 21, "delantero", true);
console.log(basquetbolista1);
basquetbolista1.setClasificacion(false);
basquetbolista1.recibirMedalla();
var Ciclista = /** @class */ (function (_super) {
    __extends(Ciclista, _super);
    function Ciclista(nombre, edad, clasificacion, categoria) {
        var _this = _super.call(this, nombre, edad, clasificacion) || this;
        _this.categoria = categoria;
        return _this;
    }
    Ciclista.prototype.setCategoria = function (categoria) {
        this.categoria = categoria;
    };
    Ciclista.prototype.getCategoria = function () {
        return this.categoria;
    };
    Ciclista.prototype.recibirMedalla = function () {
        if (this.clasificacion === false) {
            console.log("no recibe medalla");
        }
        else {
            console.log("recibe medalla");
        }
    };
    return Ciclista;
}(Deportista));
var Ciclista01 = new Ciclista("pepe", 19, false, "todo terreno");
console.log(Ciclista01);
Ciclista01.recibirMedalla();
var Equipo = /** @class */ (function () {
    function Equipo(nombre) {
        this.nombre = nombre;
    }
    return Equipo;
}());
var equipo01 = new Equipo("river");
var equipo02 = new Equipo("boca");
var equipo03 = new Equipo("san lorenzo");
var Futbolista = /** @class */ (function (_super) {
    __extends(Futbolista, _super);
    function Futbolista(nombre, edad, clasificacion, equipo, jugador) {
        var _this = _super.call(this, nombre, edad, clasificacion) || this;
        _this.equipo = equipo;
        _this.jugador = jugador;
        return _this;
    }
    Futbolista.prototype.setJugador = function (nro) {
        this.jugador = nro;
        console.log(this.jugador);
    };
    Futbolista.prototype.getJugador = function () {
        return this.jugador;
    };
    Futbolista.prototype.recibirMedalla = function () {
        if (this.clasificacion === false) {
            console.log("no recibe medalla");
        }
        else {
            console.log("recibe medalla");
        }
    };
    return Futbolista;
}(Deportista));
var fut01 = new Futbolista("jose", 25, true, equipo03, 10);
console.log(fut01);
fut01.recibirMedalla();
console.log(fut01.getNombre());
