// 01 Basic Types

// JavaScript has three very commonly used primitives: string, number, and boolean

let id = 25;
let myName = "John Doe";
let isStudying = true;

// Arrays
let hobbies: ["reading", "dancing"];

// Date
let birthDate = new Date("12-12-2000");

// let id: number;
// let myName: string;
// let isStudying: boolean;
// let birthDate: Date;
// let hobbies: string[];

function addTwoNumbers(a: number, b: number) {
  return a + b;
}

const result = addTwoNumbers(123, 123);
console.log(result);

//
// -----------------------------
//

// any

function transFormText(param: string) {
  console.log(param.toUpperCase());
}

transFormText("hello");
// console.log(transFormText(123));

// noImplicitAny

// turn on noImplicitAny in tsconfig.json

// Object Types
const object1 = {
  id: 23,
  name: "dented",
};

function printYourInfo({ name, age }: { name: string; age: number }) {
  console.log(`Hi, my name is ${name}. My age is ${age}`);
}

printYourInfo({
  age: 25,
  name: "Pramish",
});
// printYourInfo("Prem", 20);
//

function printMyInfo({ name, age }: { name: string; age: string }) {
  console.log(`Hi, my name is ${name}. I live in ${age}`);
}

// printMyInfo({
//   name: "Prem",
//   age: "20",
// });

// -----------------------------

type Directions = "UP" | "LEFT" | "RIGHT" | "DOWN";

type HorizontalDirections = Omit<Directions, "UP" | "DOWN">;

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UserAdd = Omit<User, "age">;

type UserDetails = Partial<User>;

const newUser: UserDetails = {
  id: 23,
};
