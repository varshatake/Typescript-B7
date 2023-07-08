var x: number = 10;

//alert(x);

console.log("x value is ", x);

var s1: string = "You are the creater of your destiny";
var s2: string = `Powerful people come from powerful places ${x}`;

console.log(s1);
console.log(s2);

// Boolean

var b1: boolean = true;
var b2: boolean = false;

var b3: boolean;

console.log(b1);
console.log(b2);

function test(): boolean {
  return (b3 = false);
  console.log(b3);
  b3 = true;
}

console.log(test());

import { isPalindrome } from "./utils";

console.log(isPalindrome("madam"));
console.log(isPalindrome("madan"));

 export class Check {
  static bankName: string = "Bank Of India";
  customerName: string;
  accNumber: number;

  display() {
    console.log(Check.bankName);
  }
}

// object
var check = new Check();
Check.bankName = "BOA";
check.display();
