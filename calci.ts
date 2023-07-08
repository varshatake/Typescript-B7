
class Calci {
    data1:any;
    data2:any;
    answer:any;

    constructor(){
        this.data1 = prompt(`Please Enter your first number :`);
        this.data2 = prompt(`Please Enter your second number`);
    }
    
    displayCal() {
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

var objc = new Calci();
objc.displayCal();




