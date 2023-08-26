// Interfaces vs Type Alias

// 1. Syntax - type vs interface

// primitive
type SanitizedString = string;

// union
type ID = number | string;

// tuple
type Data = [number, string];

// function
type SetPoint = (x: number, y: number) => void;

// object
type Foo = {
  x: number;
  y?: boolean;
  handler: () => void;
};

// index signature
type NumbersNames = {
  [key: string]: string;
};

// interface
// object
interface Bar {
  x: number;
  y?: boolean;
  print(text: string): void;
}

// function
interface ISetPoint {
  (x: number, y: number): void;
}

// index signature
interface INumbersNames {
  [key: string]: string;
}

//
//----------------------------------------------------
//

// 2. Primitives vs Objects support

// interface SanitizedStringNew = string;

//
//----------------------------------------------------
//

// 3. Extend
// interface uses keyword - extends
// type uses operator - intersection (&)

interface IStudent {
  id: number;
  name: string;
  address: string;
  isEnrolled: boolean;
  enrolledDate: Date;
  subjects: string[];
}

interface NewIStudent extends IStudent {
  contactNumber: number;
}

// let student5: NewIStudent = {

// }

// type TStudent = {
//   id: number;
//   name: string;
//   address: string;
//   isEnrolled: boolean;
//   enrolledDate: Date;
//   subjects: string[];
// };

// type NewTStudent =  {
//   contactNumber: number;
// } & TStudent;

// const student3: NewTStudent = {

// };

//
//----------------------------------------------------
//

// 4. Open vs closed (Declaration merging)

type TStudent = {
  id: number;
  name: string;
  address: string;
  isEnrolled: boolean;
  enrolledDate: Date;
  subjects: string[];
};

// cannot define multiple type alias with the same anme
type TStudent = {
  contact: number;
};

// where as you can do that for interface
interface IStudent {
  birthDate: Date;
}

interface IStudent {
  contactNumber: number;
}

// let student8: IStudent = {};
