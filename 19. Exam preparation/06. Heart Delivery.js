function heartDelivery(input) {
    let neighborhood = input.shift().split('@').map(Number);
    let jumpLength = 0;
    let houseIndex = 0;
    let housesCount = neighborhood.length;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'Love!') {
            break;
        }

        let jumpCommand = input[i].split(' ');
        jumpLength += Number(jumpCommand[1]);

        if (jumpLength >= housesCount) {
            jumpLength = 0;
        }

        if (neighborhood[jumpLength] === 0) {
            console.log(`Place ${jumpLength} already had Valentine's day.`);
            continue;
        }

        neighborhood[jumpLength] -= 2;

        if (neighborhood[jumpLength] === 0) {
            console.log(`Place ${jumpLength} has Valentine's day.`);
        }
    }

    console.log(`Cupid's last position was ${jumpLength}.`);

    let failedHousesCount = neighborhood.filter(h => h > 0).length;

    if (failedHousesCount === 0) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${failedHousesCount} places.`);
    }
}


// heartDelivery(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"])
// heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"])
heartDelivery(["4@2@4@2",
"Jump 1",
"Jump 2",
"Jump 1",
"Jump 2",
"Jump 2",
"Jump 2",
"Love!"])
