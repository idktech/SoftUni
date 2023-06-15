function shoppingList(input) {
    let groceries = input.shift().split("!");
    for (let i = 0; i < input.length; i++) {
        let [command, item] = input[i].split(" ");
        switch (command) {
            case "Urgent":
                if (!groceries.includes(item)) {
                    groceries.unshift(item);
                }
                break;
            case "Unnecessary":
                if (groceries.includes(item)) {
                    groceries.splice(groceries.indexOf(item), 1);
                }
                break;
            case "Correct":
                let newItem = input[i].split(" ")[2];
                if (groceries.includes(item)) {
                    groceries[groceries.indexOf(item)] = newItem;
                }
                break;
            case "Rearrange":
                if (groceries.includes(item)) {
                    groceries.splice(groceries.indexOf(item), 1);
                    groceries.push(item);
                }
                break;
            case "Go":
                console.log(groceries.join(", "));
                break;
        }
    }
}


// shoppingList(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"]);
shoppingList(["Milk!Pepper!Salt!Water!Banana", "Urgent Salt", "Unnecessary Grapes", "Correct Pepper Onion", "Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"]);