interface Icar {
    price():number;
    getTotalSeats():number;
    color():string;
    callFacility():string;
    FuelType():string;
}

interface Igps {
    Gps() : string;
}

class ToyotaCar implements Icar{
    price(): number {
        return 800000;
    }
    getTotalSeats(): number {
        return 4;
    }
    color(): string {
        return 'White';
    }
    callFacility(): string {
        return 'supported';
    }
    FuelType(): string {
        return 'Disel';
    }
    
}

class HyundaiCar implements Icar,Igps {
    price(): number {
        return 900000;
    }
    getTotalSeats(): number {
        return 6;
    }
    color(): string {
        return 'Silver';
    }
    callFacility(): string {
        return 'supported';
    }
    FuelType(): string {
        return 'Petrol & CNG';
    }
    Gps(): string {
        return 'Supported';
    }
}

console.log(`---- Toyota Car Details ----`);
var toyotaObj = new ToyotaCar();
console.log(`Price : `,toyotaObj.price());
console.log(`seates Available :`,toyotaObj.getTotalSeats());
console.log(`Call support :`,toyotaObj.callFacility());
console.log(`Car color :`,toyotaObj.color());
console.log(`Fuel Type :`,toyotaObj.FuelType());

/////////////////////////////////////////////////
console.log(`*********************************`);
console.log(`---- Hyundai Car Details ----`);
var hyundaiObj = new HyundaiCar();
console.log(`Price : `,hyundaiObj.price());
console.log(`Seates Available : `,hyundaiObj.getTotalSeats());
console.log(`Car Color :`,hyundaiObj.color());
console.log(`Call support :`,hyundaiObj.callFacility());
console.log(`Fuel Type :`,hyundaiObj.FuelType());
console.log(`GPS :`,hyundaiObj.Gps());

