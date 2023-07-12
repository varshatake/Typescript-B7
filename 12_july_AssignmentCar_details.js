var ToyotaCar = /** @class */ (function () {
    function ToyotaCar() {
    }
    ToyotaCar.prototype.price = function () {
        return 800000;
    };
    ToyotaCar.prototype.getTotalSeats = function () {
        return 4;
    };
    ToyotaCar.prototype.color = function () {
        return 'White';
    };
    ToyotaCar.prototype.callFacility = function () {
        return 'supported';
    };
    ToyotaCar.prototype.FuelType = function () {
        return 'Disel';
    };
    ToyotaCar.prototype.GPS = function () {
        return false;
    };
    return ToyotaCar;
}());
var HyundaiCar = /** @class */ (function () {
    function HyundaiCar() {
    }
    HyundaiCar.prototype.price = function () {
        return 900000;
    };
    HyundaiCar.prototype.getTotalSeats = function () {
        return 6;
    };
    HyundaiCar.prototype.color = function () {
        return 'Silver';
    };
    HyundaiCar.prototype.callFacility = function () {
        return 'supported';
    };
    HyundaiCar.prototype.FuelType = function () {
        return 'Petrol & CNG';
    };
    HyundaiCar.prototype.GPS = function () {
        return true;
    };
    return HyundaiCar;
}());
console.log("---- Toyota Car Details ----");
var toyotaObj = new ToyotaCar();
console.log("Price : ", toyotaObj.price());
console.log("seates Available :", toyotaObj.getTotalSeats());
console.log("Call support :", toyotaObj.callFacility());
console.log("Car color :", toyotaObj.color());
console.log("Fuel Type :", toyotaObj.FuelType());
console.log("GPS :", toyotaObj.GPS());
/////////////////////////////////////////////////
console.log("*********************************");
console.log("---- Hyundai Car Details ----");
var hyundaiObj = new HyundaiCar();
console.log("Price : ", hyundaiObj.price());
console.log("Seates Available : ", hyundaiObj.getTotalSeats());
console.log("Car Color :", hyundaiObj.color());
console.log("Call support :", hyundaiObj.callFacility());
console.log("Fuel Type :", hyundaiObj.FuelType());
console.log("GPS :", hyundaiObj.GPS());
