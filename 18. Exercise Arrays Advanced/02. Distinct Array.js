function distinctArray(numbers) {
    let uniqueElementArray = [];

    for (const number of numbers) {
        if (!uniqueElementArray.includes(number)) {
            uniqueElementArray.push(number);
        }
    }

    console.log(uniqueElementArray.join(" "));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
