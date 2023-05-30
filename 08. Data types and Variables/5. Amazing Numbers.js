// Write a function, which as input will receive a number.
// Check and print if it is amazing or not into the following format:
// "{number} Amazing? {True or False}"
// An amazing number includes the digit 9 the sum of its digits.
// Examples for amazing numbers are 1233 (1 + 2 + 3 + 3 = 9), 583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)


function checkAmazingNumber(number) {
    // Convert the number to a string to iterate over its digits
    let numberString = number.toString();

    // Calculate the sum of the digits
    let sum = 0;
    for (let i = 0; i < numberString.length; i++) {
        sum += Number(numberString[i]);
    }

    // Check if the sum of the digits is equal to 9
    let isAmazing = sum.toString().includes("9") ? "True" : "False";

    // Print the result
    console.log(`${number} Amazing? ${isAmazing}`);
}

checkAmazingNumber(1233)