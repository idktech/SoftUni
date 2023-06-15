function sorting(numbers) {
    let sortedArray = numbers.sort((a, b) => b - a);
    let sortedLenght = sortedArray.length;
    let resultArray = [];


    for (let i = 0; i < sortedLenght / 2; i++) {
        let currentNumber = sortedArray.shift();
        let lastNumber = sortedArray.pop()
        resultArray.push(currentNumber);
        resultArray.push(lastNumber);
    }
    console.log(resultArray.join(" "));

}

sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);