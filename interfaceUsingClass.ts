interface I1 {
    a:number;
    b:number;
    sum() : Number;
}

interface I2 extends I1{
    x:number;
    y:number;
    sub() : Number;
}

class Cal implements I2 {
    a:number;
    b:number;
    x:number;
    y:number;

    sum() {
        return(this.a + this.b);
    }

    sub() {
        return(this.x - this.y);
    }
}

var calObj = new Cal();
console.log(calObj.a = 25);
console.log(calObj.b = 60);
console.log(calObj.x = 50);
console.log(calObj.y = 100);
console.log(calObj.sum());
console.log(calObj.sub());



