var Cal = /** @class */ (function () {
    function Cal() {
    }
    Cal.prototype.sum = function () {
        return (this.a + this.b);
    };
    Cal.prototype.sub = function () {
        return (this.x - this.y);
    };
    return Cal;
}());
var calObj = new Cal();
console.log(calObj.a = 25);
console.log(calObj.b = 60);
console.log(calObj.x = 50);
console.log(calObj.y = 100);
console.log(calObj.sum());
console.log(calObj.sub());
