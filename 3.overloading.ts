class Empdata {
    eId:number;
    eName:string;
    
    constructor(eId:number,eName:string){
        this.eId = eId;
        this.eName =eName;
    }

    public getdata(salary:number|string):any;
    public getdata(department:number|string):any;

    public getdata(parameters:any):any{
        if(typeof Empdata!==undefined) {
            return `Id= ${this.eId} ,Name= ${this.eName} salary & Dept - ${parameters}`;
        }
        else {
            return `Id= ${this.eId} ,Name= ${this.eName} `;
        }
    }
}
console.log(`----- First object --------`);

var eobj = new Empdata(11,"Roshni");
console.log(`Empdata :`,eobj);

console.log(eobj.getdata(20000));
console.log(eobj.getdata('Finance'));

console.log(`--------- second object ---------`);

var eobj2 = new Empdata(12,"Tejashree");
console.log(`Empdata :`,eobj2);

console.log(eobj2.getdata(55000));
console.log(eobj2.getdata('Automobile'));


//function / method overloading --> same method name but diff parameters

class simpleOverloading {
    public addData(l:any,w:any): any;
    public addData(l:any,w:any): any;

    //have error here when use number|string i.e. operator + is not applied to number|string so set type 'any'
    public addData(l:any,w:any): any {
        if((typeof l === 'string') && (typeof w=== 'string')) {
            return l + " " + w;
        }
        else {
            return l + w;
        }
    }
}

var over = new simpleOverloading();
console.log(over.addData(20,30));
console.log(over.addData("jenny","fer"));







