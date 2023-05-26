// Write a function that receives a single number and checks if the grade is excellent or not.
// If it is, print "Excellent", otherwise print "Not excellent".
// Examples
// Input
// Output
// 5.50
// Excellent
// 4.35
// Not excellent

function solve(grade){
    if(grade >= 5.50){
        console.log('Excellent');
    }else{
        console.log('Not excellent');
    }
}

solve(4.35)