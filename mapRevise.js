let container = ["apple", "banana", "cherry"];

let box = container.map((ele) => {
    return (ele.toUpperCase());
});
console.log(` This is the ORG array: ${container} and this is the capital array ${box}`);

let nums = [5, 10, 15, 20];
let increase = nums.map( (elements) => {
    return (elements+10);
});
console.log(` this is normal numbers ${nums} and this is the increased numbers:- ${increase}`);
