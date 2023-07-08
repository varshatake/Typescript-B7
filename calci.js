var Calci = /** @class */ (function () {
    function Calci() {
        this.data1 = prompt("Please Enter your first number :");
        this.data2 = prompt("Please Enter your second number");
    }
    Calci.prototype.displayCal = function () {
        this.answer = this.data1 + this.data2;
        alert("Addition is --> ".concat(this.answer));
        this.answer = this.data1 - this.data2;
        alert("Subtraction is --> ".concat(this.answer));
        this.answer = this.data1 * this.data2;
        alert("Multiplication is --> ".concat(this.answer));
        this.answer = this.data1 / this.data2;
        alert("Division is --> ".concat(this.answer));
    };
    return Calci;
}());
var objc = new Calci();
objc.displayCal();
