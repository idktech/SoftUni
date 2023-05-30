// 1. Echo Type
// Write a JS function that takes one parameter and prints on two 
//lines the type of the parameter and then one of the following:
// •
// If the parameter type is either string or number, print its value
// •
// Otherwise, print the text 'Parameter is not suitable for printing'


function echo(param) {
    const dataType = typeof param;
    console.log(dataType);
    if (dataType == 'string' || dataType == 'number') {
        console.log(`${param}`);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}


echo(18)
echo('some string')