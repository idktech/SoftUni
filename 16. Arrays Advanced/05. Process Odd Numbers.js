/*You are given an array of numbers. Write a function that prints the elements at odd positions from the array,
doubled and in reverse order.
The input comes as an array of number elements.
The output is printed on the console on a single line, separated by space.
Examples:
Input
[10, 15, 20, 25] 
Output
50 30
Input
[3, 0, 10, 4, 7, 3]
Output
6 8 0
Hints
•
Counting in arrays starts from 0
•
For example –we receive 10, 15, 20, 25
•
The elements at odd positions are 15 (index 1) and 25 (index 3)
•
We need to take these two elements and multiply them * 2
•
Finally, we print them on the console in reversed order */

//Here's a JavaScript function that satisfies the requirements you've described:
function printDoubledElementsInReverse(arr) {
    let result = [];
    for (let i = 1; i < arr.length; i += 2) {
        let doubled = arr[i] * 2;
        result.push(doubled);
    }
    console.log(result.reverse().join(" "));
}
// This function takes an array of numbers as input, and iterates over it starting at the second element (i = 1). For each odd position, it doubles the corresponding element and adds it to a result array. After iterating over the input array, it reverses the result array and prints its elements, separated by spaces.

// Here's an example usage of the function with the input array [10, 15, 20, 25]:
printDoubledElementsInReverse([10, 15, 20, 25])
// In this example, printDoubledElementsInReverse() outputs "50 30", which corresponds to the doubled elements at odd positions in the input array (15 * 2 and 25 * 2), in reverse order.