// variable
export var a: string = "Hello good Morning";

//function
export function demoFun() : void {
    console.log(`I am simple Function`);
}

export class Myclass {
    x: number;
    y: number;
    constructor( x: number,y: number){
        this.x = x;
        this.y =y;
    }

    add = () =>{
        return(this.x + this.y)
    }

}