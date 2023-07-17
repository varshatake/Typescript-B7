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
var Cars = /** @class */ (function () {
    function Cars() {
    }
    Cars.prototype.wheels = function () {
        return 4;
    };
    Cars.prototype.callSupport = function () {
        return 'Supported';
    };
    Cars.prototype.ACservice = function () {
        return true;
    };
    return Cars;
}());
var toyota = /** @class */ (function (_super) {
    __extends(toyota, _super);
    function toyota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    toyota.prototype.price = function () {
        return 1200000;
    };
    toyota.prototype.GPS = function () {
        return 'Not supported';
    };
    toyota.prototype.Fueltype = function () {
        return 'petrol + CNG';
    };
    toyota.prototype.Color = function () {
        return 'BLACK';
    };
    return toyota;
}(Cars));
var hundai = /** @class */ (function (_super) {
    __extends(hundai, _super);
    function hundai() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hundai.prototype.price = function () {
        return 1100000;
    };
    hundai.prototype.GPS = function () {
        return 'supported';
    };
    hundai.prototype.Fueltype = function () {
        return 'EV';
    };
    hundai.prototype.Color = function () {
        return 'Maroon';
    };
    return hundai;
}(Cars));
console.log("--------------Toyota Details--------");
var t1 = new toyota();
console.log("no of wheels : ", t1.wheels());
console.log("AC : ", t1.ACservice());
console.log("Call : ", t1.callSupport());
console.log("Price : ", t1.price());
console.log("GPS : ", t1.GPS());
console.log("color of car : ", t1.Color());
console.log("Fuel : ", t1.Fueltype());
console.log("--------------Hundai Details--------");
var h = new hundai();
console.log("no of wheels : ", h.wheels());
console.log("AC : ", h.ACservice());
console.log("Call : ", h.callSupport());
console.log("Price : ", h.price());
console.log("GPS : ", h.GPS());
console.log("color of car : ", h.Color());
console.log("Fuel : ", h.Fueltype());
