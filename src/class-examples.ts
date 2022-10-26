/* TypeScript class practice */

class SimpleClassExample {
    // TypeScript and JavaScript properties are public by default
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


class MiscellaneousFields {
    public publicField: boolean;
    private myNumber: number
    private myString: string;
    protected _secret: string;

    constructor(myNumber?: number) {
        this.publicField = true;
        this.myNumber = 1;
        this.myString = "TypeScript";
        this._secret = "Not telling";
    }

    get secret(): string {
        return this._secret;
    }

    set secret(secret: string) {
        this._secret = secret;
    }
}

const mf = new MiscellaneousFields();
console.log(mf.secret);
