function arrayOfStrings(arrays) {

    let sorted = arrays.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a.localeCompare(b);
    })

    console.log(sorted.join("\n"));
}

arrayOfStrings(['Isacc',
'Theodor',
'Jack',
'Harrison',
'George'])