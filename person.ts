class Person {

    constructor(public fname?: string, public age?: number) {
        this.fname = fname;
        this.age = age;
    }
}

const jack = new Person('Jack', 50);
console.log(jack.fname, jack.age);

function Display(id: number, name: string, role: string = "Guest User") {
    console.log('Id', id);
    console.log('Name', name);
    if(role != undefined) {
        console.log('Role', role);
    }
    
}

//Display(1, 'Jack', 'Admin');

Display(1, 'Jack');