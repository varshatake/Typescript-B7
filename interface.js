var Product = /** @class */ (function () {
    function Product() {
        this.id = 2;
        this.name = 'IPhone';
        this.description = 'Its awesome ';
    }
    return Product;
}());
var objProduct = new Product();
console.log(objProduct);
var PDF = /** @class */ (function () {
    function PDF() {
    }
    PDF.prototype.print = function () {
        // print the file as pdf format
    };
    return PDF;
}());
var DOC = /** @class */ (function () {
    function DOC() {
    }
    DOC.prototype.print = function () {
        // print the doc file as doc format
    };
    return DOC;
}());
var Excel = /** @class */ (function () {
    function Excel() {
    }
    Excel.prototype.print = function () {
        // print the excel file as xls format
    };
    return Excel;
}());
var myCar = {
    make: 'Tata',
    model: 'nexon',
    year: 2023,
    color: 'gray',
    numOfDoors: 4,
    seats: 4,
    auto: true
};
console.log("My Car", myCar.make, myCar.auto, myCar.model);
