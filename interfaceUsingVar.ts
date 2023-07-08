interface Iinterface {
    empName : String;
    empId:number;
    empSal:Number;
    display() :any;
}

var emp:Iinterface ={
    empName: "john",
    empId: 10,
    empSal: 5000,
    display() {
        console.log(this.empName,this.empId,this.empSal);
    },

}

console.log(emp.empName);
console.log(emp.empId);
console.log(emp.empSal);
console.log(emp.display());



