function sumOfFirstAndLast(arr) {
  let firstEl = +arr.shift();
  let lastEl = +arr.pop();
  let sum = firstEl + lastEl;
  console.log(sum);
}

sumOfFirstAndLast(["20", "30", "40"]);
