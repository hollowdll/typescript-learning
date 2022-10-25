/* TypeScript class practice */

class SimpleClassExample {
    myNumber: number;

    constructor() {
        this.myNumber = 1;
    }
}

const scx = new SimpleClassExample();
scx.myNumber = 2;
console.log(scx.myNumber);  // Prints 2


class PrivateFieldClass {
    private age: number;
    private name: string;

    constructor() {
        this.age = 69;
        this.name = "Joseph";
    }

    setAge(age: number): void {
        this.age = age;
    }

    getAge(): number {
        return this.age;
    }
}

const pfc = new PrivateFieldClass();
console.log(pfc.getAge());

