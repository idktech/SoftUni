function firstAndLastKNumbers(data) {
    let k = data.shift();
    let firstK = data.slice(0, k)
    let lastK = data.slice(k *  -1);

    console.log(firstK.join(" "));
    console.log((lastK).join(" "));

}

firstAndLastKNumbers([3,
    6, 7, 8, 9])