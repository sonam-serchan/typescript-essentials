// 02 Type Union

let age: string | number;
age = 26;
age = "26";

let phoneNumber: string | number;
phoneNumber = 455111333;
phoneNumber = "9777980120";

function logEither(value: string | number) {
  console.log(value);
}

logEither("Dented Code"); // Ok
logEither(2220); // Also Ok

// logEither(false);
// Error: Type 'boolean' is not assignable to type 'number | string'.

//
// -----------------------------
//

// Literal types

// In addition to the general types string and number, we can refer to specific strings and numbers in type positions:

// Union type with a literal type in each position
let favouriteColor: "red" | "blue" | "green" | "yellow";

favouriteColor = "blue";
// favouriteColor = "crimson"; // ERROR: Type '"crimson"' is not assignable to type '"red" | "blue" | "green" | "yellow"'.

export {};
