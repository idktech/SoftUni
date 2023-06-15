function searchNum(numbersArr, commandsArr) {

    let numbersToTake = commandsArr[0];
    let numbersToDelete = commandsArr[1];
    let searchedNumber = commandsArr[2];

    let newArray = numbersArr.slice(0, numbersToTake);
    newArray.splice(0, numbersToDelete);

    let numberCounter = newArray.filter(e => e === searchedNumber).length;

    console.log(`Number ${searchedNumber} occurs ${numberCounter} times.`);

}

searchNum([5, 2, 3, 4, 1, 6], [5, 2, 3])