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


/* Arrays */

function arrays() {
    let myArray: number[] = [1,2,3];

    for (const e of myArray) {
        console.log(e);
    }
}

const createTypeScriptArray = () => {

}


/* Tuples */



/* Enums */



