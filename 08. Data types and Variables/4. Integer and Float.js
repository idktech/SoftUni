// You will receive 3 numbers. Your task is to find their sum and print result to the console in the following format:
// `{sum} - {type of the number (Integer or Float)}`

function sumAndType(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let sumType = sum % 1 === 0 ? "Integer" : "Float";
    console.log(`${sum} - ${sumType}`);
}

sumAndType(9, 100, 1.1)
sumAndType(100, 200, 303)