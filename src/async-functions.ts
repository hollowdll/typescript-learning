// Testing and messing around with asynchronous functions
// to see different behaviours

let myString: string = "empty";
let myString2: string = "also empty";

const asyncFunction1 = async (): Promise<void> => {
    let myPromise: Promise<string> = new Promise(function(resolve) {
        resolve("I am async");
    });

    try {
        myString = await myPromise;
    } catch(err) {
        console.log(err);
    }
}

const asyncFunction2 = async (): Promise<void> => {
    const value: number = 1;

    let myPromise: Promise<string> = new Promise(function(resolve, reject) {
        if (value !== 1) {
            resolve("I am asyncFunction2!");
        } else {
            reject("Error occurred!");
        }
    });

    myPromise.then(
        function(value: string) { console.log(value); },
        function(error: any = 0) { console.log(error); }
    );

    console.log(myPromise);

    try {
        myString2 = await myPromise;
        console.log(myString2);
    } catch(err) {
        console.log(err);
    }
}

asyncFunction2();

/*
asyncFunction1();
console.log(myString);
*/
