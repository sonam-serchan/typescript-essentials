// Interface

// Interfaces are used to “shape” an object by describing a certain set of members and/or type annotations.

// Syntax - starts with interface keyword

interface MyInterface {
  memberOne: string;
  memberTwo: number;
  memberThree?: boolean;
}

let myVar: MyInterface = {
  memberOne: "34",
  memberTwo: 234,
};

//
interface Student {
  id: number;
  name: string;
  address: string;
  isEnrolled: boolean;
  enrolledDate?: Date;
  subjects: string[];
}

const student1: Student = {
  id: 1,
  name: "Pramish",
  address: "Rockdale",
  isEnrolled: true,
  subjects: ["Network", "Software", "Cyber Security"],
  enrolledDate: new Date("11/11/2000"),
};

type StudentKeys = keyof Student;

type Name = string;
type Address = string;

type createType<T> = T;

let myNeName: createType<string> = "Abhiskar";
let myAddress: createType<string> = "Rockdale";
let myAge: createType<number> = 123;

let studentKeysPlace: StudentKeys = "id";

const student2: Student = {
  id: 2,
  name: "Ram",
  address: "Sydney",
  isEnrolled: false,
  subjects: ["physics"],
};

function updateStudent(student: Student) {
  // api call
  // fetch("https://my-api", { method: "PATCH", body: student });
  // handle response
}

updateStudent(student1);
updateStudent(student2);
