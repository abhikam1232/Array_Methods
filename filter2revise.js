let numbers = [12, 5, 20, 8, 33, 45, 2, 19, 50];

let result = numbers.filter( (ele) => {
    return ele%2 == 0;
});
console.log(result);

let box  = ["apple", "banana", "kiwi", "strawberry", "mango", "orange"];
let res = box.filter( (ele) => {
    return ele.length>5;
});
console.log(res);

