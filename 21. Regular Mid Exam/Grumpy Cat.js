function main(data) {
    const input = data;
    const numbers = input.question().split(' ').map(Number);
    const targetIndex = Number(input.question());
    const size = input.question();
    const type = input.question();

    const leftSum = numbers.slice(0, targetIndex)
        .filter(num => isValid(num, numbers[targetIndex], size, type))
        .reduce((sum, num) => sum + num, 0);

    const rightSum = numbers.slice(targetIndex + 1)
        .filter(num => isValid(num, numbers[targetIndex], size, type))
        .reduce((sum, num) => sum + num, 0);

    console.log(leftSum >= rightSum ? `Left - ${leftSum}` : `Right - ${rightSum}`);
}

function isValid(number, targetNumber, size, type) {
    if (size === 'cheap') {
        if (targetNumber > number) {
            return isValidType(number, size, type);
        }
    } else {
        if (targetNumber <= number) {
            return isValidType(number, size, type);
        }
    }

    return false;
}

function isValidType(number, size, type) {
    if (type === 'positive') {
        return number > 0;
    }

    if (type === 'negative') {
        return number < 0;
    }

    return true;
}

main([1, 5, 1], 1, "cheap");
