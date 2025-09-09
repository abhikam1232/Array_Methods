// Q2. Create a new array using map function whose each element is equal to the orignal element plus 5..
let arr = [ 2, 3, 4, 5, 6];

let result = arr.map( (ele) => {
    return (ele+5);
});
console.log(` This is theorignal array:- ${arr}`);
console.log(result);