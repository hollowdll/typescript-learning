// Practice JS/TS references

class Foo {
    bar: number;

    constructor() {
        this.bar = 0;
    }
}

const list: Array<Foo> = [new Foo(), new Foo(), new Foo()];

// Reference the last item
const lastItem = list[list.length - 1];
lastItem.bar = 5;

// Remove the last item
list.pop();

console.log("Length of list: ", list.length);
console.log(list[list.length - 1].bar);

// lastItem is still valid
console.log(lastItem.bar);