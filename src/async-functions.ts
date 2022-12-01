// Testing and messing around with asynchronous functions
// to see different behaviours

let myString: string = "empty";

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

asyncFunction1();
console.log(myString);