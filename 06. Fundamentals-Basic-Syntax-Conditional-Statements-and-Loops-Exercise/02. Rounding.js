function solve(a, b) {
    let num = Number(a);
    let precision = Number(b);
    if (precision > 15) {
        precision = 15
    }
    let result = parseFloat(num.toFixed(precision))
    console.log(result)
}

solve(10.5, 3)