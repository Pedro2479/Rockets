"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(id, propulsores, potencia, acelerar) {
        this.id = id;
        this.prop = propulsores;
        this.potencia = potencia;
        this.acelerar = acelerar;
    }
    Rocket.prototype.acelerarRocket = function (potencia) {
        for (var i = 0; i < potencia.length; i++) {
            this.acelerar += potencia[i] + 10;
        }
        return this.acelerar;
    };
    return Rocket;
}());
