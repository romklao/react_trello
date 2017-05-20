class Base {
    constructor() {
        console.log("Base Constructor");
    }

    foo() {
        console.log("Base");
    }
}

class Derived extends Base {
    constructor() {
        console.log("Derived Constructor");
                super();

    }

    foo() {
        console.log("Derived");
    }
}

console.log("Hello Rom!");

var v = new Derived();
//v.foo();
