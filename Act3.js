// 10 let
let studentName = "Cristine";
let age = 23;
let course = "Computer Science";
let section = "1C";
let automataGrade = 90;
let softwareGrade = 88;
let proglangGrade = 92;
let electiveGrade = 95;
let attendance = 95;
let status = "Regular";

// 10 const
const school = "NwSSU";
const semester = "First Semester";
const yearLevel = "Third Year";
const passingGrade = 75;
const maxGrade = 100;
const subjectCount = 4;
const honorGrade = 90;
const teacher = "Mr. Ortiz";
const room = "Rm 201";
const program = "BS Computer Science";

// 5 arrow functions
const calculateAverage = (grades) => {
    return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
};

const getStatus = (average) => {
    return average >= passingGrade ? "Passed" : "Failed";
};

const greetStudent = (name) => {
    return `Hello, ${name}!`;
};

const getRemark = (average) => {
    return average >= honorGrade ? "With Honors" : "Good Job";
};

const addBonus = (grade) => {
    return grade + 2;
};

// 3 destructured arrays
const grades = [automataGrade, softwareGrade, proglangGrade, electiveGrade];

const [firstGrade, secondGrade, thirdGrade, fourthGrade] = grades;

const subjects = ["Automata Theory", "Software Engineering", "Programming Language", "Professional Elective"];
const [subject1, subject2, subject3, subject4] = subjects;

const scores = [85, 90, 95];
const [score1, score2, score3] = scores;

// 3 destructured objects 
const student = {
    name: studentName,
    age: age,
    course: course,
    section: section
};

const { name, age: studentAge, course: studentCourse } = student;

const schoolInfo = {
    schoolName: school,
    semester: semester,
    year: yearLevel
};

const { schoolName, semester: currentSemester } = schoolInfo;

const teacherInfo = {
    teacherName: teacher,
    classroom: room
};

const { teacherName, classroom } = teacherInfo;

// 2 arrays using spread operator
const allGrades = [...grades, 98, 96];

const allSubjects = [...subjects, "History", "Computer"];


// 2 object literals using spread operator
const updatedStudent = {
    ...student,
    status: status
};

const completeStudent = {
    ...updatedStudent,
    attendance: attendance
};

// 2 arrays using .map()
const doubledScores = scores.map(score => score * 2);

const gradeWithBonus = grades.map(grade => addBonus(grade));

// 2 arrays using .filter()
const passingGrades = grades.filter(grade => grade >= passingGrade);

const highGrades = grades.filter(grade => grade >= honorGrade);

// 2 object literals using optional chaining
const studentContact = {
    name: student?.name,
    email: student?.contact?.email
};

const studentAddress = {
    name: student?.name,
    city: student?.address?.city
};

// calculations
const average = calculateAverage(grades);
const finalStatus = getStatus(average);
const remark = getRemark(average);

console.log(`${greetStudent(studentName)}`);
console.log(`Student Name: ${studentName}`);
console.log(`Age: ${age}`);
console.log(`Course: ${course}`);
console.log(`Section: ${section}`);
console.log(`School: ${school}`);
console.log(`Semester: ${semester}`);
console.log(`Year Level: ${yearLevel}`);
console.log(`Teacher: ${teacher}`);
console.log(` Room: ${room}`);
console.log(`Automata Theory Grade: ${automataGrade}`);
console.log(`Software Engineering Grade: ${softwareGrade}`);
console.log(`Programming Language Grade: ${proglangGrade}`);
console.log(`Professional Elective Grade: ${electiveGrade}`);
console.log(`Average Grade: ${average.toFixed(2)}`);
console.log(`Status: ${finalStatus}`);
console.log(`Remark: ${remark}`);
console.log(`Passing Grades: ${passingGrades.join(", ")}`);
console.log(`High Grades: ${highGrades.join(", ")}`);
console.log(`Subjects: ${allSubjects.join(", ")}`);


