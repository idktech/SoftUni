let number = 20;
let digit = 0;
let count = 0;

while (number > 0){
    let remainder = number % 2;
    
    if( remainder === digit){
        count++;
    }
    number = Math.trunc(number / 2)
}
console.log(count);