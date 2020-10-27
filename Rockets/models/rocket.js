"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(id, propulsores) {
        this.id_ = id;
        this.prop_ = propulsores;
    }
    Object.defineProperty(Rocket.prototype, "getId", {
        get: function () {
            return this.id_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rocket.prototype, "getPropu", {
        get: function () {
            return this.prop_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rocket.prototype, "setId", {
        set: function (id) {
            this.id_ = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rocket.prototype, "setPropulsores", {
        set: function (propulsores) {
            this.prop_ = propulsores;
        },
        enumerable: false,
        configurable: true
    });
    return Rocket;
}());
