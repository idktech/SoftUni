function matrix(num) {
  let row = "";
  let column = "";

  for (let i = 0; i < num; i++) {
    row += num + " ";
    for (let j = 0; j < num; j++) {
      column += num + " ";
    }
    console.log(column);
    column = "";
  }
}
matrix(4);
