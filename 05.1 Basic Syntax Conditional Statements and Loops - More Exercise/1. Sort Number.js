// Receive three numbers and you have to sort them in
// descending order. Print each number on a new line

// function sortNumbers(a, b, c) {
//   let numbers = [a, b, c];
//   numbers.sort((x, y) => y - x);
//   for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//   }
// }

//-----------------------------------------
// function sortNumbers(a, b, c) {
//   let numbers = [a, b, c];
//   for (let i = 0; i < numbers.length; i++) {
//       for (let j = i + 1; j < numbers.length; j++) {
//           if (numbers[i] < numbers[j]) {
//               let temp = numbers[i];
//               numbers[i] = numbers[j];
//               numbers[j] = temp;
//           }
//       }
//   }
//   for (let i = 0; i < numbers.length; i++) {
//       console.log(numbers[i]);
//   }
// }

// sortNumbers(3,2,5)

// -------------------------------------------
function sortNumbersDescending(a, b, c) {
  if (a >= b && a >= c) {
    if (b >= c) {
      console.log(a);
      console.log(b);
      console.log(c);
    } else {
      console.log(a);
      console.log(c);
      console.log(b);
    }
  } else if (b >= a && b >= c) {
    if (a >= c) {
      console.log(b);
      console.log(a);
      console.log(c);
    } else {
      console.log(b);
      console.log(c);
      console.log(a);
    }
  } else {
    if (a >= b) {
      console.log(c);
      console.log(a);
      console.log(b);
    } else {
      console.log(c);
      console.log(b);
      console.log(a);
    }
  }
}

sortNumbersDescending(4, 6, 12);
