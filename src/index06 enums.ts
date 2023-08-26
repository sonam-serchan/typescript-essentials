// Enums

// Enums allow us to define or declare a collection of related values

enum Countries {
  Nepal,
  Australia,
  America,
  Brazil,
}

enum Direction {
  Up,
  Right,
  Left,
  Down,
}

enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

enum Color {
  Red = "REDS",
  Green = "GREEN",
  Blue = "BLUE",
}

const student3 = {
  id: 2,
  name: "Ram",
  address: "Sydney",
  isEnrolled: "false",
  subjects: [1, 2],
  country: Countries.Nepal,
  favouriteColor: Color.Red,
};

function printIsWeekDayOrWeekend(day: Days) {
  if (day === Days.Monday) {
    return console.log("Oh, it's Weekday");
  }
  if (day === Days.Saturday) {
    return console.log("Yayy! It's the weekend");
  }
  return console.log("No week day and no weekend!");
}

printIsWeekDayOrWeekend(Days.Monday);

//
// -------------------------------------------------------
//
