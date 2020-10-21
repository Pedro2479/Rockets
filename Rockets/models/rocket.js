"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(id, propulsores) {
        this.id_ = id;
        this.prop_ = propulsores;
    }
    Rocket.prototype.getId = function () {
        return this.id_;
    };
    Rocket.prototype.getPropu = function () {
        return this.prop_;
    };
    Rocket.prototype.setId = function (id) {
        this.id_ = id;
    };
    Rocket.prototype.setPropulsores = function (propulsores) {
        this.prop_ = propulsores;
    };
    return Rocket;
}());
