let single = [2, 4, 6, 8, 10];

let double = single.map( (elements) => {
    console.log( elements * 2);
});

console.log(double); // This basically creates a new array and it prints the double of it, means a new operation 


// using Map function print the Square of a number:- 
let myarr = [ 10, 20, 30];

let result = myarr.map( (ele) => {
    console.log(ele * ele);
});

// Create and array of strings and print the length of array using map function.. 

let fruits = [ "Apple", "cherry", "Pineapple", "Lithchi"];

let output = fruits.map( (things) => {
    return things.length;
});
console.log(output);
