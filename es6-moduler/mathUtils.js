// alt 1
// function addition(a,b) {
//     return a + b;
// }

// function subtraction(a,b) {
//     return a - b;
// }

// function multiply(a,b) {
//     return a * b;
// }

// function divide(a,b) {
//     return a / b;
// }

// export {addition, subtraction, multiply, divide} 

export function addition(a,b) {
    return a + b;
}

export function subtraction(a,b) {
    return a - b;
}

export function multiply(a,b) {
    return a * b;
}

export function divide(a,b) {
    return a / b;
}

// Med funktionsuttryck
export const funcExpression = () => {
    console.log("funcExpression") 
} 
/// Man kan inte sätta default på en ett funktionsutryck, endast som i sista raden här i filen


//export {funcExpression}
//export default funcExpression; // Default export - endast en per fil!
