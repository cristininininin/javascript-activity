// Variables
let schoolName = "NwSSU";
let totalStudents = 3;
let isSystemOpen = true;

// Arrays
let students = "Precious Jolan, Maria Mae Yvone, Cristine";
let courses = "BSIS, BSCS, BSIT";
let grades = [90, 92, 95];

// Classes
// class 1
class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
    console.log("Hello, I'm " + this.name);
    }
}

// Inheretance
class Student extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }

    study() {
        console.log(this.name + "is currently studying" + this.course);
    }
}

// Encapsulation
class School {
    #money;

    constructor(name,money) {
        this.name = name;
        this.#money = money;
    }

    showMoney () {
        console.log("School Fee: " + this.#money);
    }
    addMoney(amount) {
        this.#money = this.#money + amount;
    }
}

// Object

let person1 = new Person("Maria Yvone Princess Scarlet", 20);
let student1 = new Student("Princess Sherean Joy", 24, "BSIT");
let teacher1 = new Teacher("Ms. Precious Jolan", 23);
let school = new School("NwSSU", 10000);

// Object Literals
let studentInfo = {
    name: "Maria Yvone Princess Scarlet",
    age: 24,
    course: "CS"
};

let teacherInfo = {
    name: "Ms. Precious Jolan",
    subject: "JavaScript",
};

// Conditionals
if (student1.age >= 18) {
    console.log("Student is an adult.");
}

if (grades[0] >= 75) {
    console.log("Passed");
} else {
    console.log("Failed");
}

if (schoolOpen == true) {
    console.log("School is now open.");
} else {
    console.log("School is now closed.");
}

// Loops
// For-Loop
for (let i = 0; i < student1.length; i++) {
    console.log(student[i]);
}

// While-Loop
let i = 0;

while (i < course.length) {
    console.log(course[i]);
    i++;
}

// For of Loop
for (let grade of grades) {
    console.log(grade);
}

// Abstraction

class Calculator {
    average (a, b, c) {
        return(a+b+c)/3;
    }
}

let calculator1 = new Calculator();
    console.log("Average:" + calculator1.average(90, 89, 95));

// Using Methods
person1.introduce ();

student1.intoduce ();
student1.study ();

teacher1.intoduce ();
teacher1.teach ();

school1.showMoney();

school1.addMoney(5000);

school1.showMoney();