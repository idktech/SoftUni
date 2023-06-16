function employeeEfficiency(params) {

    let employeeOne = Number(params.shift());
    let employeeTwo = Number(params.shift());
    let employeeThree = Number(params.shift());

    let students = Number(params.shift());

    let answersPerHour = employeeOne + employeeTwo + employeeThree;
    let needeedHour = 0;

    while (students > 0) {
        needeedHour++;
        students -= answersPerHour;

        if(needeedHour % 4 === 0){
            needeedHour++;
        }
        
    }


    console.log(`Time needed: ${needeedHour}h.`);
}

employeeEfficiency(['5', '6', '4', '20'])
employeeEfficiency(['1', '2', '3', '45'])
employeeEfficiency(['3', '2', '5', '40'])