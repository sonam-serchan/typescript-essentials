// 03 Type Aliases

// Type aliases create type definitions that can be reused throughout the code

// Syntax - type

// Primitives

type StringOrNumber = string | number | boolean;

let age: StringOrNumber;
age = 26;
age = "26";

let phoneNumber: StringOrNumber;
phoneNumber = 455111333;
phoneNumber = "9777980120";

function logEither(value: StringOrNumber) {
  console.log(value);
}

// type StringOrNumber = string | number;

type MyType = {
  memberOne: string;
  memberTwo: number;
  memberThree: boolean;
};

let myVar: MyType = {
  memberOne: "This is a string",
  memberTwo: 23,
  memberThree: false,
};

// -----------------------------------

type Student = {
  id: number;
  name: string;
  address: string;
  isEnrolled: boolean;
  enrolledDate?: Date;
  subjects: string[];
};

const student1: Student = {
  id: 1,
  name: "Pramish",
  address: "Rockdale",
  isEnrolled: true,
  subjects: ["Network", "Software", "Cyber Security"],
  enrolledDate: new Date("12/12/2000"),
};

const student2 = {
  id: 2,
  name: "Ram",
  address: "Sydney",
  isEnrolled: false,
  subjects: ["networking"],
};

function addStudent(student: Student) {
  // api call
  fetch("https://my-api", { method: "POST", body: JSON.stringify(student) });
  // handle response
}

addStudent(student1);
addStudent(student2);

export {};
