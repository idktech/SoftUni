function arrModifier(input) {
    let arr = input.shift().split(' ').map(Number);
    for (let i = 0; i < input.length; i++) {
        let [command, index1, index2] = input[i].split(' ');
        index1 = Number(index1);
        index2 = Number(index2);
        switch (command) {
            case 'swap':
                let temp = arr[index1];
                arr[index1] = arr[index2];
                arr[index2] = temp;
                break;
            case 'multiply':
                arr[index1] *= arr[index2];
                break;
            case 'decrease':
                arr = arr.map(x => x - 1);
                break; 
        }
    }
    console.log(arr.join(', '));
}

arrModifier(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', 'multiply 1 2', 'multiply 2 1', 'decrease', 'end']);