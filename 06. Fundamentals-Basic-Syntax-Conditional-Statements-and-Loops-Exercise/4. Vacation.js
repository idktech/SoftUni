function price(a, b, c) {
    let numPeople = Number(a);
    let groupType = b;
    let day = c;
    let price;
    // Friday Students
    if (groupType === 'Students' && day === 'Friday' && numPeople <= 29) {
        price = 8.45 * numPeople;
    } else if (groupType === 'Students' && day === 'Friday') {
        price = (8.45 * numPeople) * 0.85
    } else if (groupType === 'Students' && day === 'Saturday' && numPeople <= 29) { //Saturday Students
        price = 9.80 * numPeople;
    } else if (groupType === 'Students' && day === 'Saturday') {
        price = (9.80 * numPeople) * 0.85
    } else if (groupType === 'Students' && day === 'Sunday' && numPeople <= 29) { //Sunday Students
        price = 10.46 * numPeople;
    } else if (groupType === 'Students' && day === 'Sunday') {
        price = (10.46 * numPeople) * 0.85
    }
    //Friday Business
    else if (groupType === 'Business' && day === 'Friday' && numPeople >= 100) {
        price = 10.90 * (numPeople - 10)
    } else if (groupType === 'Business' && day === 'Friday') {
        price = 10.90 * numPeople
    } else if (groupType === 'Business' && day === 'Saturday' && numPeople >= 100) {//Saturday Business
        price = 15.60 * (numPeople - 10)
    } else if (groupType === 'Business' && day === 'Saturday') {
        price = 15.60 * numPeople;
    }
    //Sunday Business
    else if (groupType === 'Business' && day === 'Sunday' && numPeople >= 100) {
        price = 16 * (numPeople - 10)
    } else if (groupType === 'Business' && day === 'Sunday') {
        price = 16 * numPeople;
    }
    //Friday Regular
    else if (groupType === 'Regular' && day === 'Friday' && numPeople >= 10 && numPeople <= 20) {
        price = (15 * numPeople) * 0.95
    } else if (groupType === 'Regular' && day === 'Friday') {
        price = 15 * numPeople;
    } else if (groupType === 'Regular' && day === 'Saturday' && numPeople >= 10 && numPeople <= 20) {//Saturday Regular
        price = (20 * numPeople) * 0.95
    } else if (groupType === 'Regular' && day === 'Saturday') {
        price = 20 * numPeople;
    } else if (groupType === 'Regular' && day === 'Sunday' && numPeople >= 10 && numPeople <= 20) { //Sunday Regular
        price = (22.50 * numPeople) * 0.95
    } else if (groupType === 'Regular' && day === 'Sunday') {
        price = 22.50 * numPeople;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}

price(30, 'Students', 'Sunday')