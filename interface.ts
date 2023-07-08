interface IProduct {
    id: number;
    name: string;
    description: string;
    price?: number        // Optional parameter
}

class Product implements IProduct {
id: number = 2;
name: string = 'IPhone';
description: string = 'Its awesome ';


}

let objProduct =new Product();
console.log(objProduct);

interface IPrint {
    print(): void
}


class PDF  implements IPrint{
    print() {
        // print the file as pdf format
    }
}

class DOC implements IPrint {
    print() {
        // print the doc file as doc format
    }
}

class Excel implements IPrint {
    print() {
        // print the excel file as xls format
    }
}

interface Exterior {
    color: string;
    numOfDoors: number;
}

interface Interior {
    seats: number;
    auto: boolean;
}

interface Car extends Exterior, Interior {
    make: string;
    model: string;
    year: number;
}

var myCar: Car = {

    make : 'Tata',
    model : 'nexon',
    year: 2023,
    color: 'gray',
    numOfDoors : 4,
    seats : 4 ,
    auto : true
}

console.log("My Car", myCar.make,myCar.auto,myCar.model);
