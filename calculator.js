var Calculator = /** @class */ (function () {
    function Calculator(data1, data2, answer) {
        this.data1 = data1;
        this.data2 = data2;
        this.answer = answer;
        this.data1 = data1;
        this.data2 = data2;
        this.data1 = prompt("Please Enter your first number : ");
        this.data2 = prompt("Please Enter your second number");
    }
    Calculator.prototype.displayCalc = function () {
        this.answer = this.data1 + this.data2;
        alert("Addition is --> ".concat(this.answer));
        this.answer = this.data1 - this.data2;
        alert("Subtraction is --> ".concat(this.answer));
        this.answer = this.data1 * this.data2;
        alert("Multiplication is --> ".concat(this.answer));
        this.answer = this.data1 / this.data2;
        alert("Division is --> ".concat(this.answer));
    };
    return Calculator;
}());
var obj = new Calculator(1, 2, 3);
obj.displayCalc();
