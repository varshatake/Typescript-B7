var Calculator = /** @class */ (function () {
    function Calculator() {
        this.data1 = prompt("Please Enter your first number : ");
        this.data2 = prompt("Please Enter your second number");
        this.num1 = parseInt(this.data1);
        this.num2 = parseInt(this.data2);
    }
    Calculator.prototype.displayCalc = function () {
        this.answer = this.num1 + this.num2;
        alert("Addition is --> ".concat(this.answer));
        this.answer = this.num1 - this.num2;
        alert("Subtraction is --> ".concat(this.answer));
        this.answer = this.num1 * this.num2;
        alert("Multiplication is --> ".concat(this.answer));
        this.answer = this.num1 / this.num2;
        alert("Division is --> ".concat(this.answer));
    };
    return Calculator;
}());
var obj = new Calculator();
obj.displayCalc();
