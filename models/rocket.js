"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(id, propulsores, potencia, acelerar) {
        this.id = id;
        this.prop = propulsores;
        this.potencia = potencia;
        this.acelerar = acelerar;
    }
    Rocket.prototype.acelerarRocket = function (potencia) {
        var valActual = 0;
        for (var i = 0; i <= potencia.length; i++) {
            this.acelerar += potencia[i];
            valActual = this.acelerar + 10;
            valActual++;
            return valActual;
        }
    };
    return Rocket;
}());
