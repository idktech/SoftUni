function solve(input) {
    // parce input 
    // - first three elements and calculate employee efficiency 


    let e1 = Number(input[0]);
    let e2 = Number(input[1]);
    let e3 = Number(input[2]);

    let people = Number(input[3])
    let efficiency = e1 + e2 + e3;
    let hour = 0;

    //repeat until there are no more clients
    while (people > 0) {
        // - record current hour
        hour++
        // - if current hour is 4 do nothing
        if (hour % 4 !== 0) {
            // - subtract from the remaining time count employee efficiency
            people -= efficiency;
        }
    }

    //print result
    console.log(`Time needed: ${hour}h.`);
}

solve(["5", "6", "4", "20"])
solve(["1", "2", "3", "45"])
solve(["3", "2", "5", "40"])