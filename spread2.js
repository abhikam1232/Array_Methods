// Q1. Combine two arrays:-
let odd = [1, 3, 5, 7, 9, 11];
let even = [ 2, 4, 6, 8, 10];
let total = [...odd, ...even];
console.log(total);

// Q2. Create a new object using spread which copies all properties of student but changes the city to "Mumbai" and adds a new property marks: 90.

let students = {
    name: "Rahul",
    age: 20,
    city: "Pune",
}

let copyStudents = { ...students, city: "Mumbai", marks: 90};
console.log(copyStudents);


// 
let data = {
    email: "xyz@gmail.com",
    pass: "xyz",
}

let copydata ={ ...data, id: 122};
console.log(copydata);