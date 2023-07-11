var Calci = /** @class */ (function () {
    function Calci() {
        this.data1 = prompt("Please Enter your first number : ");
        this.data2 = prompt("Please Enter your second number");
        this.num1 = parseInt(this.data1);
        this.num2 = parseInt(this.data2);
    }
    Calci.prototype.displayCalc = function () {
        this.answer = this.num1 + this.num2;
        alert("Addition is --> ".concat(this.answer));
        this.answer = this.num1 - this.num2;
        alert("Subtraction is --> ".concat(this.answer));
        this.answer = this.num1 * this.num2;
        alert("Multiplication is --> ".concat(this.answer));
        this.answer = this.num1 / this.num2;
        alert("Division is --> ".concat(this.answer));
    };
    return Calci;
}());
var obj = new Calci();
obj.displayCalc();
