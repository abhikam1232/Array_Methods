// Use forEach to print the square of each number.
let nums = [ 2, 4, 6, 8, 10];

let result = ( (ele) => {
    console.log(ele*ele);
});

nums.forEach(result);

// use forEach():- 
let fruits = ["apple", "mango", "banana", "pinapple"];

let output = ( (elements) => {
    console.log("FRUITS:- ", elements);
});

fruits.forEach(output);

// Print each name and age:- 
let users = [
  { name: "Aman", age: 20 },
  { name: "Neha", age: 25 },
  { name: "Raj", age: 30 }
];

let finalOutput = ((ele) => {
    console.log(ele.name, "is", ele.age, "years old");
});

console.log(users.forEach(finalOutput));

// Use map to create a new array with each number doubled.

let numbers = [1, 2, 3, 4, 5];

let double = ( (ele) => {
    return ele*ele;
});

console.log(numbers.map(double)); // This map methods is basically use to return a new array with some opeartion performed in it.. 

// Create a new array where each name starts with capital letter of that name?
let names = ["raj", "neha", "aisha"];

let capitalName = ( (elements) => {
    return ( elements[0].toUpperCase() + elements.slice(1));
});

console.log(names.map(capitalName));

// Celcius into Farhenit:- 

let celsius = [0, 20, 30, 40];

let far = ( (ele) => {
    return (ele*1.8+32);
});

console.log( celsius.map(far));

// Use filter to get only the array greater than 30:- 
let numbers2 = [10, 25, 30, 45, 60, 75];

let screen = ( (ele) => {
    return (ele > 30);
});
console.log(" These are the numbers greater than 30");
console.log(numbers2.filter(screen));



// Use filter to get only the marks that represent passing students (marks ≥ 40).
let marks = [35, 80, 55, 90, 45];

let myOutput = ( (ele) => {
    return (ele >= 40, " These students marks are passes");
});

console.log(marks.filter(myOutput));

// Use filter to get the words who has length more than 4 letters:- 
let words = ["apple", "sun", "banana", "kiwi", "grapes"];

let myResult = ( (ele) => {
    return (ele.length > 4);
})
console.log(words.filter(myResult));

// Print the first alphabet capital:- 

let word = ["apple", "sun", "banana", "kiwi", "grapes"];

let myresult = ( (ele) => {
    return (ele[0].toUpperCase() + ele.slice(1));
});
console.log(`this is my Orignal array:- ${word}`);
console.log(word.map(myresult));



