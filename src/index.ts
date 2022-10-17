console.log("Have a good day!");

/* TypeScript practicing */
/* TypeScript primitives: any, unknown, never, enum, tuple */
/* JavaScript primitives: number, string, boolean, null, undefined, object */

function primitives() {
    let myNumber = 123_456_789;
    let myString = "TypeScript > JavaScript";
    let myBoolean = true;
    const myNumberConst: number = 123_456_789;
    const myStringConst: string = "TypeScript > JavaScript";
    const myBooleanConst: boolean = true;
    let person: any;
    
    console.log(typeof myNumber);
}
// primitives();


/* Arrays */

function arrays() {
    console.log("Executing function 'arrays'");

    let myArray: number[] = [1,2,3];

    for (const e of myArray) {
        console.log(e);
    }
}
// arrays();

const createTypeScriptArray = () => {
    console.log("Executing function 'createTypeScriptArray'");

    let myArray: string[] = [];

    for (let i: number = 0; i < 5; i++) {
        myArray[i] = `text ${i +1}`;
    }

    myArray.forEach(n => console.log(n, "Length: ", n.length));
}
// createTypeScriptArray();

const genericArrayExample = () => {
    let myGenericArray: Array<number> = [1,2,3];

    myGenericArray.forEach(n => console.log(n));
}
// genericArrayExample();


/* Tuples */

const tupleExample = () => {
    console.log("Executing function 'tupleExample'");

    /* Tuples are fixed size arrays where each element has a specific data type */

    // age, name, height
    let person: [number, string, number] = [69, "Boomer", 200];
    
    // key value pair
    let keyValuePair: [string, number];

    for (const e of person) {
        console.log("Value: ", e);
    }
}
// tupleExample();


/* Enums */

const enumExample = () => {
    console.log("Executing function 'enumExample'");

    /* Enum is a list of constants */

    // Use PascalCase for enums
    const enum Month { January, February, March };
    
    let myMonth: Month = Month.March;
    console.log(myMonth);   // Prints 2

    const enum MyEnum { Value1 = "one", Value2 = "two", Value3 = "three" };
}
// enumExample();

/* Practice spread operator */
