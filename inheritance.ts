var x:any=10;
x = 'codemind';
console.log(x);

function addnum(num1:number,num2:number) :number{
    console.log(num1+num2);
    return 1;
}
console.log(addnum(7,5));
addnum(2,3);

function addnu(num1:number,num2:number) :number{
    //console.log(num1+num2);
    return num1+num2;
}
console.log(addnum(7,5));
addnum(2,3);

class student {
    public firstName: string;
    public lastname: string;

    constructor(firstName: string, lastname: string) {
        this.firstName = firstName;
        this.lastname = lastname;
    }

}

class test extends student {

    constructor() {
        super("test1", "test2")
    }

   
}
// obj of parent
var objStudent = new student("Rocky", "Bhai");

console.log(objStudent.firstName + " " + objStudent.lastname);

//obj of child
var tests =new test();
console.log(tests.firstName,tests.lastname);


class parents {
   public fatherName : string;
   public motherName: string;

   constructor(fatherName:string,motherName:string){
    this.fatherName=fatherName;
    this.motherName=motherName;
   }

}

class childofParent extends parents{
    constructor(childName:string){
        super('motherMerry', 'vihan');
        
    }

}