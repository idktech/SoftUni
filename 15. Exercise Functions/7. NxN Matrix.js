function matrix(num) {
    let row = 0;
    let column = 0;
    for (let i = 0; i >= num; i++) {
        row += num[i]
    }
    console.log(row)
}

matrix(3)