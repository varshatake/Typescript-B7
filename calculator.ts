class Calculator {

    constructor(public data1:any , public data2:any,public answer:any){
        this.data1 = data1;
        this.data2 = data2;

        this.data1 = prompt(`Please Enter your first number : `);
        this.data2 = prompt(`Please Enter your second number`);
        
    }
    
    displayCalc():any {
        this.answer = this.data1 + this.data2; 
        alert(`Addition is --> ${this.answer}`);
        this.answer = this.data1 - this.data2;
        alert(`Subtraction is --> ${this.answer}`);
        this.answer = this.data1 * this.data2;
        alert(`Multiplication is --> ${this.answer}`);
        this.answer = this.data1 / this.data2;
        alert(`Division is --> ${this.answer}`);
    }
}

var obj = new Calculator(1,2,3);
obj.displayCalc();