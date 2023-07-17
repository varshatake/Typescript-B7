abstract class Cars {
    wheels():number {
        return 4;
    }

    callSupport() : string {
        return 'Supported';
    }

    ACservice():boolean {
        return true;
    }

    abstract price() : number;
    abstract GPS(): string;
    abstract Fueltype():string;
    abstract Color():string;

}

class toyota extends Cars {
    price() : number{
        return 1200000;
    }
    GPS(): string{
        return 'Not supported';
    }
    Fueltype():string{
        return 'petrol + CNG';
    }
    Color():string {
        return 'BLACK';
    }
}

class hundai extends Cars {
    price() : number{
        return 1100000;
    }
    GPS(): string{
        return 'supported';
    }
    Fueltype():string{
        return 'EV';
    }
    Color():string {
        return 'Maroon';
    }
}

console.log(`--------------Toyota Details--------`);
var t1 = new toyota();
console.log(`no of wheels : `,t1.wheels());
console.log(`AC : `,t1.ACservice());
console.log(`Call : `,t1.callSupport());
console.log(`Price : `,t1.price());
console.log(`GPS : `,t1.GPS());
console.log(`color of car : `,t1.Color());
console.log(`Fuel : `,t1.Fueltype());

console.log(`--------------Hundai Details--------`);
var h = new hundai();
console.log(`no of wheels : `,h.wheels());
console.log(`AC : `,h.ACservice());
console.log(`Call : `,h.callSupport());
console.log(`Price : `,h.price());
console.log(`GPS : `,h.GPS());
console.log(`color of car : `,h.Color());
console.log(`Fuel : `,h.Fueltype());



