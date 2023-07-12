var Gradcalculator = /** @class */ (function () {
    function Gradcalculator() {
        this.grad = confirm("*** Grad Calculator ***");
        this.math = prompt("Enter the Maths Mark's : ");
        this.physics = prompt("Enter the Physics Mark's :");
        this.chem = prompt("Enter the Chemistry Mark's :");
        this.no1 = parseFloat(this.math);
        this.no2 = parseFloat(this.physics);
        this.no3 = parseFloat(this.chem);
    }
    Gradcalculator.prototype.gradC = function () {
        console.log("-------- Grad Calculator Assignment ---------");
        console.log("Maths Mark : ".concat(this.math));
        console.log("Physics Marks : ".concat(this.physics));
        console.log("Chemistry Marks : ".concat(this.chem));
        alert("Maths Mark : ".concat(this.math));
        alert("Physics Marks : ".concat(this.physics));
        alert("Chemistry Marks : ".concat(this.chem));
        //sum of all subject marks
        this.sum = this.no1 + this.no2 + this.no3;
        console.log("Summation is : ".concat(this.sum));
        console.log("-----------------------------------");
        alert("Addition of All subject Marks : ".concat(this.sum));
        //Average of marks
        this.Avg = this.sum / 3;
        console.log("Average is : ".concat(this.Avg));
        alert("Average : ".concat(this.Avg));
        ///////////////////
        if ((this.Avg) === undefined || (this.Avg) === null || isNaN(this.Avg)) {
            alert("Please enter valid Input...");
        }
        else {
            if (this.Avg < 70) {
                console.log("grade = \"C\"");
                alert("grade = \"C\"");
            }
            else if (this.Avg > 70 && this.Avg < 90) {
                console.log(" grade = \"B\"");
                alert(" grade = \"B\"");
            }
            else {
                console.log("grade = \"A\"");
                alert(" grade = \"A\"");
            }
        }
        //////////////////
    };
    return Gradcalculator;
}());
var gradObj = new Gradcalculator();
gradObj.gradC();
