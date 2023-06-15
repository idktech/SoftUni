function arrayOfStrings(arrays) {

    //* ? First method
    // let sorted = arrays.sort((a, b) => {
    //     if (a.length !== b.length) {
    //         return a.length - b.length;
    //     }
    //     return a.localeCompare(b);
    // })
    //* ? Second method
    let sortedArray = arrays.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    })

    console.log(sortedArray.join("\n"));
}

arrayOfStrings(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'])