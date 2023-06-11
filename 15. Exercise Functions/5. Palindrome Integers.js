function palindromeIntegers(arr) {

    for (let i = 0; i < arr.length; i++) {
        let numAsStr = arr[i].toString();
        let reversedNum = numAsStr.split("").reverse().join("");

        if (numAsStr === reversedNum) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
