// function factorialDivision(num1, num2) {
//   function factorial(n) {
//     if (n === 0) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }

//   let factorialNum1 = factorial(num1);
//   let factorialNum2 = factorial(num2);
//   let divisionResult = factorialNum1 / factorialNum2;

//   console.log(divisionResult.toFixed(2));
// }

function factorialDivision(num1, num2) {
  function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  const factorialNum1 = factorial(num1);
  const factorialNum2 = factorial(num2);
  const divisionResult = factorialNum1 / factorialNum2;

  console.log(divisionResult.toFixed(2));
}

// Example usage
factorialDivision(5, 2);
