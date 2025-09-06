// Spread is used to expand or access each and every element from an array:- 
//  Q1. find the minimum using spread..

let array = [ 2, 5, 4, 63, 42, 5210, 55];
console.log(Math.min(...array)); // ... Three dots represents the spread property in an array:- 
console.log(Math.max(...array));
console.log(Math.random(...array));

// Merge these array into single array:- 
let myProduct1 = ["apple", "pinneaple"];
let myProduct2 = ["Custurbaple", "litchi"];
let final = [...myProduct1, ...myProduct2];
console.log(final);

let myName = ("Abhishek Kamble");
console.log(...myName);