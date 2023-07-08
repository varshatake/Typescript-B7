"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Myclass = exports.demoFun = exports.a = void 0;
// variable
exports.a = "Hello good Morning";
//function
function demoFun() {
    console.log("I am simple Function");
}
exports.demoFun = demoFun;
var Myclass = /** @class */ (function () {
    function Myclass(x, y) {
        var _this = this;
        this.add = function () {
            return (_this.x + _this.y);
        };
        this.x = x;
        this.y = y;
    }
    return Myclass;
}());
exports.Myclass = Myclass;
