var Televisor = /** @class */ (function () {
    function Televisor(on, vol, chn) {
        if (on === void 0) { on = false; }
        if (vol === void 0) { vol = 10; }
        if (chn === void 0) { chn = 0; }
        this.isOn = on;
        this.volume = vol;
        this.channel = chn;
    }
    Televisor.prototype.switchOnOff = function () {
        this.isOn = !this.isOn;
        console.log(this.isOn ? "encendido" : "apagado");
    };
    Televisor.prototype.volUp = function () {
        if (!this.isOn)
            return;
        if (this.volume >= 100) {
            console.log("nivel maximo de volumen alcanzado");
        }
        else
            (console.log("el volumen es", this.volume + 1));
    };
    Televisor.prototype.volDown = function () {
        if (!this.isOn)
            return;
        if (this.volume <= 0) {
            console.log("nivel minimo de volumen alcanzado");
        }
        else
            (console.log("el volumen es", this.volume - 1));
    };
    Televisor.prototype.channelUp = function () {
        if (!this.isOn)
            return;
        if (this.channel > 99) {
            console.log("canal invalido");
        }
        else
            (console.log("subiste al canal", this.channel + 1));
    };
    Televisor.prototype.channelDown = function () {
        if (!this.isOn)
            return;
        if (this.channel <= 0) {
            console.log("canal invalido");
        }
        else
            (console.log("bajaste al canal", this.channel - 1));
    };
    Televisor.prototype.pickChannel = function (channel) {
        if (!this.isOn)
            return;
        this.channel = channel;
        if (this.channel < 1 || this.channel > 99) {
            console.log("canal invalido");
        }
        else {
            console.log("Cambiaste al canal", this.channel);
        }
    };
    Televisor.prototype.info = function () {
        console.log("canal:", this.channel, "\n volumen:", this.volume, "\n hora:", new Date().toLocaleTimeString());
    };
    return Televisor;
}());
var tv01 = new Televisor();
tv01.switchOnOff();
tv01.volUp();
tv01.volDown();
tv01.channelUp();
tv01.channelDown();
tv01.pickChannel(150);
tv01.info();
