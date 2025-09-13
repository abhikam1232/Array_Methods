let array = [ 2, 3, 4];

let result = ( (ele) => {
    let ops = (ele*ele);
    console.log(` So the square is ${ops}`);
});

array.forEach(result);

let words = ["apple", "banana", "cherry", "date"];

words.forEach( (ele, i) => {
    console.log(` At index ${i} is: ${ele}`);
});