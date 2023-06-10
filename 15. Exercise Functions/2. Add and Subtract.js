function addAndSubtract(num, num1, num2) {
  function sum(num, num1) {
    return num + num1;
  }
  let sumOfFirsTwo = sum(num, num1);

  function subtract(sumOfFirsTwo, num2) {
    return sumOfFirsTwo - num2;
  }
  let result = subtract(sumOfFirsTwo, num2);
  console.log(result);
}
addAndSubtract(33, 22, 11);
addAndSubtract(77, 22, 11);
addAndSubtract(56, 43, 15);
