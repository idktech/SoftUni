function generateSequence(n, k) {
    const sequence = [1]; // start sequence with first element equal to 1

    // loop through the remaining n-1 elements and generate the sequence
    for (let i = 1; i < n; i++) {
        const sum = sequence.slice(-k).reduce((acc, curr) => acc + curr, 0); // get the sum of previous k elements
        sequence.push(sum); // add the sum to the sequence
    }
    console.log(sequence.join(" ")); // print the sequence with spaces between elements
}

generateSequence(8, 2)