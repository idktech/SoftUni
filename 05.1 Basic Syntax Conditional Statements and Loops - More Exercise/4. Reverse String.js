//Write a program that reverses a string and prints it on the console

function reverseString(str) {
    let reversedString = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
      reversedString += str[i];
    }
    
    console.log(reversedString);
  }
  
  reverseString('Hello')