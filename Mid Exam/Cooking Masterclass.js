
function calculateBudget(data) {
    let budget = data[0];
    let students = data[1];
    let flourPrice = data[2];
    let eggPrice = data[3];
    let apronPrice = data[4];

    let aprons = Math.ceil(students * 1.2);
    let flourPackages = students - Math.floor(students / 5);
    let eggs = students * 10;

    let totalCost = (aprons * apronPrice) + (flourPackages * flourPrice) + (eggs * eggPrice);
    totalCost = totalCost.toFixed(2);

    if (totalCost <= budget) {
        console.log(`Items purchased for ${totalCost}$.`);
    } else {
        let neededMoney = (totalCost - budget).toFixed(2);
        console.log(`${neededMoney}$ more needed.`);
    }
}

calculateBudget([50, 2, 1.0, 0.10, 10.0]);
console.log("=====================");
calculateBudget([100, 25, 4.0, 1.0, 6.0]);
console.log("=====================");
calculateBudget([946, 20, 12.05, 0.42, 27.89]);