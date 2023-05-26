function dayOfTheWeek(input) {
  let weekDayString = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (input <= 7 && input >= 1) {
    console.log(weekDayString[input - 1]);
  } else {
    console.log("Invalid day!");
  }
}
dayOfTheWeek(3);
dayOfTheWeek(6);
dayOfTheWeek(11);
