function friendListMaintenance(input) {
    let friends = input.shift().split(", ");
    let excludeCount = 0;
    let lostCount = 0;
    for (let line of input) {
        if (line === "Report") {
            break;
        }
        let [command, indexOrName, newName] = line.split(" ");
        if (command === "Blacklist") {
            let name = indexOrName;
            if (friends.includes(name)) {
                let index = friends.indexOf(name);
                friends[index] = "Blacklisted";
                excludeCount++;
                console.log(`${name} was blacklisted.`);
            } else {
                console.log(`${name} was not found.`);
            }
        } else if (command === "Error") {
            let index = Number(indexOrName);
            if (index >= 0 && index < friends.length) {
                let name = friends[index];
                if (name !== "Blacklisted" && name !== "Lost") {
                    friends[index] = "Lost";
                    lostCount++;
                    console.log(`${name} was lost due to an error.`);
                }
            }
        } else if (command === "Change") {
            let index = Number(indexOrName);
            if (index >= 0 && index < friends.length) {
                let currentName = friends[index];
                friends[index] = newName;
                console.log(`${currentName} changed his username to ${newName}.`);
            }
        }
    }
    console.log(`Blacklisted names: ${excludeCount}`);
    console.log(`Lost names: ${lostCount}`);
    console.log(friends.join(" "));
}


friendListMaintenance(["Mike, John, Eddie",
"Blacklist Mike",
"Error 0",
"Report"]);
console.log("-------------------");
friendListMaintenance(["Mike, John, Eddie, William",
"Error 3",
"Error 3",
"Change 0 Mike123",
"Report"]);
console.log("-------------------");
friendListMaintenance(["Mike, John, Eddie, William",
"Blacklist Maya",
"Error 1",
"Change 4 George",
"Report"])