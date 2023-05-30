// Write a function, which as input will receive a number.
// Check and print if it is amazing or not into the following format:
// "{number} Amazing? {True or False}"
// An amazing number includes the digit 9 the sum of its digits.
// Examples for amazing numbers are 1233 (1 + 2 + 3 + 3 = 9), 583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)


// function amazingNums(numAsTex){
//     let sum = 0;

//     for (let index = 0; index < numAsTex.length; index++) {
//         sum += Number(numAsTex[i])
//         console.log(numAsTex[i]);
//     }

//     let isAmazing = sum.toString().includes("9") ? "True" : "False"

//     console.log(`${numAsTex} Amazing? ${isAmazing}`);
// }

// amazingNums(1233)

let numAsTex = 999;
let sum = 0;

for (let index = 0; index < numAsTex.length; index++) {
    sum += Number(numAsTex[i])
    console.log(numAsTex[i]);
}