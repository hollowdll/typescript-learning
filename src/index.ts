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


/* Functions */

function typeScriptFunction1(example: number): number {
    return 0;
}

const typeScriptFunction2 = (example1: string = "", example2: number = 69): boolean => {
    console.log("Executing function 'typeScriptFunction2'");

    let option: boolean = false;

    if (example1 == "TypeScript") {
        console.log("TypeScript is better than JavaScript!");
        option = true;
    }
    console.log("Parameter2 has default value of ", example2);

    return option;
}
// typeScriptFunction2("TypeScript");


/* Objects and Type Aliases */

type TypeAlias = {
    readonly myNumber: number,
    myString: string,
    myFunction: (parExample: boolean) => void
}

let typeAliasExample: TypeAlias = {
    myNumber: 69,
    myString: "Example",
    myFunction: (parExample: boolean) => {
        console.log("Nothing ", parExample);
    }
}


/* Union Type */

function unionTypeExample(myPar: number | string | TypeAlias): void {
    if (typeof myPar === "number")
        console.log("Number");
    else if (typeof myPar === "string")
        console.log("String");
    else
        console.log("TypeAlias");
    
}
// unionTypeExample(5);
// unionTypeExample("TypeScript");


/* Type Intersection */

function typeIntersectionExample() {
    type Example1 = {
        myMethod1: () => void
    }

    type Example2 = {
        myMethod2: () => void
    }

    // Type intersection combines 2 types into 1
    type Combination = Example1 & Example2;

    let combinationObject: Combination = {
        myMethod1: () => {},
        myMethod2: () => {}
    }
}


/* Literal Types */

function literalTypeExample() {
    // Literal types have exact and specific values

    type literalType1 = 1 | 2 | 3;
    type literalType2 = '1' | '2' | 3 | "Four";
    
    let example1: literalType2 = 3;
    let example2: literalType2 = "Four";
}


/* Nullable Types */

function nullableTypeExample(myPar: number | null | undefined) {
    if (typeof myPar === "number")
        console.log("Value: ", myPar)
    else
        console.log(myPar);
    
}
// nullableTypeExample(null);



/* Interfaces */



/* Practice spread operator */


/* Practice optional properties and parameters */
// Example: myVariable?: string
