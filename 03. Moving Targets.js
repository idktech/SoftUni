function movingTargets(input) {
    let targets = input.shift().split(" ").map(Number);
    for (let i = 0; i < input.length; i++) {
        let [command, index, value] = input[i].split(" ");
        index = Number(index);
        value = Number(value);
        switch (command) {
            case "Shoot":
                if (targets[index] !== undefined) {
                    targets[index] -= value;
                    if (targets[index] <= 0) {
                        targets.splice(index, 1);
                    }
                }
                break;
            case "Add":
                if (targets[index] !== undefined) {
                    targets.splice(index, 0, value);
                } else {
                    console.log("Invalid placement!");
                }
                break;
            case "Strike":
                let radius = Number(value);
                let leftIndex = index - radius;
                let rightIndex = index + radius;
                if (leftIndex >= 0 && rightIndex < targets.length) {
                    targets.splice(leftIndex, rightIndex - leftIndex + 1);
                } else {
                    console.log("Strike missed!");
                }
                break;
            case "End":
                console.log(targets.join("|"));
                break;
        }
    }
}

// movingTargets(["52 74 23 44 96 110", "Shoot 5 10", "Shoot 1 80", "Strike 2 1", "Add 22 3", "End"])
movingTargets(["1 2 3 4 5", "Strike 0 1", "End"])