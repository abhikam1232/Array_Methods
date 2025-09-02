// To check if all numbers are even:-

let myarray = [ 2, 4, 6, 8, 10];

let result = ( (ele) =>{
    return ele%2 == 0;
})
console.log(myarray.every(result));  // It will give true because all elements are true..

// To check if it is odd or not :-

let arry = [1,3,5,6];

let output = arry.every( (ele) =>{
    return ele%2 != 0;
})
console.log(output);

// Check if all students scored more than 40.

let students = [28, 89, 65, 76, 34, 90];

let report = students.every( (ele) =>{
    return ele>=40;
})
console.log(`${report} It is false coz there are students who scored below 40`);

// Check if all strings in an array have length greater than 3.
let words = ["Abhishek", "pranav", "Samarth", "himashu"];

let greater = words.every( (ele) => {
    return ele.length >=5;
})
console.log(greater);