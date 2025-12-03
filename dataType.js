let a = 24;
let fullName = "shubham";
let isLoggedIn = false;
let age;
let born = null;
let x = BigInt(1234567890123456789012345678901234567890);
let y = Symbol("Hello!");

console.log(a, fullName, isLoggedIn, age, born, x, y);

const student = {
    name: "shubham",
    age: 24,
    isLoggedIn: false  
}

console.log(student)

// accessing object properties
console.log(student.name)
console.log(student["age"])

// updating any property of object
student.isLoggedIn = true
console.log(student)