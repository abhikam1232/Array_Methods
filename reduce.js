// This reduce medthod basically coneverts all the array into a single value that value..

let arr = [ 255, 455, 6522, 545, 4552, 5522, 45555, 455, 4555, 66842, 45662, 554565, 86200];
let output = arr.reduce( (res, ele) =>{
    return (res+ele);
})
console.log(output);

// now to print the average of by using reduce method:- 
let array = [ 21, 554, 212, 45, 8, 80, 800, 45, 665, 55556, 455, 55, 44, 555, 8555, 445, 554];
let sum = array.reduce( (res, ele) => (res+ele));
let avg = sum/array.length;
console.log("Average is:- ", avg);

// this is a logic to multiply the array:- 
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myProduct = myArray.reduce ( (res, ele) => {
    return (res*ele);
})
console.log(myProduct); // This is done using reduce the array by multiplying it... 