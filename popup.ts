console.log("Hello");
alert("Hello");

function newConfirm(test?: string) {

}

confirm("Do you really want to do this?");
var data = prompt("Please enter your name");
console.log('Entered name', data)

// unknown and any

let value : unknown;

// value = true; // OK 

// value = [];
// value = Math.random;
// value = null;
// value = undefined;

let value1 : unknown = value;
let value2 : any = value;

let value3 : boolean = value;  //unknown 'value' is not assignable to boolean 

let value4 : number = value;     //unknown 'value' is not assignable to boolean 

let value5 : string = value;     //unknown 'value' is not assignable to boolean 

let value6 : object = value;    //unknown 'value' is not assignable to boolean 

let value7 : any[] = value;