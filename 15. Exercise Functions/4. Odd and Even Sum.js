function oddAndEvenSum(num) {
  let strNum = String(num);
  let oddNums = 0;
  let evenNums = 0;

  for (let index = 0; index < strNum.length; index++) {
    if (strNum[index] % 2 === 0) {
      evenNums += Number(strNum[index]);
    } else {
      oddNums += Number(strNum[index]);
    }
  }
  console.log(`Odd sum = ${oddNums}, Even sum = ${evenNums}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
