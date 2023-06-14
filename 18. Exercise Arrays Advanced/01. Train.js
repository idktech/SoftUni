function train(arr) {
  let wagons = arr[0].split(" ").map(Number);
  let wagonCapacity = Number(arr[1]);

  for (let i = 2; i < arr.length; i++) {
    let command = arr[i].split(" ");
    if (command[0] === "Add") {
      wagons.push(Number(command[1]));
    } else {
      let passandgers = Number(command[0]);
      for (let j = 0; j < wagons.length; j++) {
        if (wagonCapacity - wagons[j] >= passandgers) {
          wagons[j] += passandgers;
          break
        }
      }
    }
  }

  console.log(wagons.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
