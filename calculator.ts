class Calculator {

    data1 : any =  prompt(`Please Enter your first number : `);
    data2 : any = prompt(`Please Enter your second number`);
    answer : any;

    num1 = parseInt(this.data1);
    num2 = parseInt(this.data2);
    
    displayCalc():any {
        this.answer = this.num1 + this.num2; 
        alert(`Addition is --> ${this.answer}`);
        this.answer = this.num1 - this.num2;
        alert(`Subtraction is --> ${this.answer}`);
        this.answer = this.num1 * this.num2;
        alert(`Multiplication is --> ${this.answer}`);
        this.answer = this.num1 / this.num2;
        alert(`Division is --> ${this.answer}`);
    }
}

var obj = new Calculator();
obj.displayCalc();