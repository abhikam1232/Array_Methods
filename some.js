// Check if your array [2, 4, 6, 8, 10] has any number greater than 9.
let arry = [2, 4, 6, 8, 10];
let result = arry.some( (ele) => {
    return ele > 9;
})
console.log(result);

// Check if your array [2, 4, 6, 8, 10] has any odd number.
let array = [2, 4, 6, 8, 10];
let output = array.some( (ele) => {
    return ele%2 != 0;
})
console.log(output);

// Given an array of strings ["apple", "banana", "mango", "kiwi"], check if at least one string has a length greater than 5.

let words = ["apple", "banana", "mango", "kiwi"];
let result2 = words.some( (ele) => {
    return ele.length > 5;
})
console.log(result2);