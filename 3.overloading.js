var Empdata = /** @class */ (function () {
    function Empdata(eId, eName) {
        this.eId = eId;
        this.eName = eName;
    }
    Empdata.prototype.getdata = function (parameters) {
        if (typeof Empdata !== undefined) {
            return "Id= ".concat(this.eId, " ,Name= ").concat(this.eName, " salary & Dept - ").concat(parameters);
        }
        else {
            return "Id= ".concat(this.eId, " ,Name= ").concat(this.eName, " ");
        }
    };
    return Empdata;
}());
console.log("----- First object --------");
var eobj = new Empdata(11, "Roshni");
console.log("Empdata :", eobj);
console.log(eobj.getdata(20000));
console.log(eobj.getdata('Finance'));
console.log("--------- second object ---------");
var eobj2 = new Empdata(12, "Tejashree");
console.log("Empdata :", eobj2);
console.log(eobj2.getdata(55000));
console.log(eobj2.getdata('Automobile'));
//function / method overloading --> same method name but diff parameters
var simpleOverloading = /** @class */ (function () {
    function simpleOverloading() {
    }
    //have error here when use number|string i.e. operator + is not applied to number|string so set type 'any'
    simpleOverloading.prototype.addData = function (l, w) {
        if ((typeof l === 'string') && (typeof w === 'string')) {
            return l + " " + w;
        }
        else {
            return l + w;
        }
    };
    return simpleOverloading;
}());
var over = new simpleOverloading();
console.log(over.addData(20, 30));
console.log(over.addData("jenny", "fer"));
