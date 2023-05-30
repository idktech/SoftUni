// Write a JS function that calculates the date of the next day by given year, month, and day.
// The input comes as three number parameters. The first element is the year, the second is the month and the third is
// the day.
// The output should be returned as a result of your function.


function nextDay(year, month, day) {

    let date = new Date(year, month - 1, day);

    date.setDate(date.getDate() + 1);

    let nextYear = date.getFullYear();
    let nextMonth = date.getMonth() + 1;
    let nextDay = date.getDate();
    
    console.log(`${nextYear}-${nextMonth}-${nextDay}`);
}


nextDay(2020, 05, 31);

