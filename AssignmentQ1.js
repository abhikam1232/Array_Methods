// Q1. Square and sum the Array  elements using arrow function then find average of that array..

let myArray = [ 1, 2, 3, 4, 5, 6, 7, 8];

let result = myArray.map( (ele) => {
    return ele*ele;
});

console.log(result);

let sum = result.reduce( (acc, num) => (acc+num) );
console.log(`This is the sum of all the elements of an array:- ${sum}`);

let average = (sum/result.length);
console.log(`This is the average:- ${average}`);



