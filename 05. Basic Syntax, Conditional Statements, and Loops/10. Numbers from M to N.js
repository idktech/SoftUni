// Write a function that receives a number M and a number N (M will always be bigger than N).
// Print all numbers from M to N

function numsFromMtoN(M, N) {
    for (let i = M; i >= N; i--) {
        console.log(i);
    }
}

numsFromMtoN(6,2)