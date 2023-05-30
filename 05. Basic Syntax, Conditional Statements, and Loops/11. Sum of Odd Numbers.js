// Write a program that prints the next n odd numbers (starting from 1) and on the last row prints the sum of them.
// Input
// You will receive a number – n. This number shows how many odd numbers you should print.
// Output
// Print the next n odd numbers, starting from 1, separated by newlines.
// On the last line, print the sum of these numbers in the following format: `Sum: {total sum}`


function sumOddNums(n) {
    let sum = 0;
    let count = 0;
    let num = 1;

    while (count < n) {
        if (num % 2 !== 0) {
            console.log(num);
            sum += num;
            count++;
        }
        num++;
    }

    console.log(`Sum: ${sum}`);
}

sumOddNums(5)