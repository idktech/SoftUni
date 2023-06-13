function negativeOrPositive(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      newArr.unshift(arr[i]);
    } else if (arr[i] >= 0) {
      newArr.push(arr[i]);
    }
  }
  for (let j = 0; j < newArr.length; j++) {
    console.log(newArr[j]);
  }
}

negativeOrPositive(["7", "-2", "8", "9"]);
negativeOrPositive(["3", "-2", "0", "-1"]);
