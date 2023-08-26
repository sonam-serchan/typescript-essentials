// Utility types

interface Student {
  id: number;
  name: string;
  address: string;
  isEnrolled?: boolean;
  enrolledDate?: Date;
  subjects?: string[];
}

interface StudentUpdate extends Pick<Student, "name" | "id" | "address"> {}

interface StudentUpdate2 extends Omit<Student, "name" | "id" | "address"> {}

interface StudentUpdate3 extends Partial<Student> {}

interface StudentUpdate4 extends Required<Student> {}

type StudentUpdate5 = Partial<Student>;

let student10: StudentUpdate5 = {};

// Partial

// Required

// Omit

// Pick

export {};
