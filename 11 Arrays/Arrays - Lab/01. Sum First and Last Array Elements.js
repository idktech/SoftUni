function sumStartAndEndOfArr(input){
    let firstOfArr = input[0];
    // console.log(firstOfArr);
    let lastOfArr = input[input.length-1];
    // console.log(lastOfArr);
    sum = firstOfArr + lastOfArr;
    console.log(sum)
}

sumStartAndEndOfArr([20, 30, 40])
console.log('--------------');
sumStartAndEndOfArr([10, 17, 22, 33])
console.log('--------------');
sumStartAndEndOfArr([11, 58, 69])