/* TypeScript interface practice */

// TypeScript interfaces are custom types only for objects

interface NumberInterface {
    num1: number,
    num2?: number
}

interface StringInterface {
    str1: string,
    str2: string
}

interface CombinedInterface extends NumberInterface, StringInterface {
    combination: string
}

const combinedInterface: CombinedInterface = {
    num1: 1,
    str1: "Type",
    str2: "Script",
    combination: ""
}

