// Q3. Create a new array whose elements are in upper case of the orignal array..
let container = ["mercedes", "bmw", "lamborgini", "porshe", "maclaren"];
let upper = container.map( (ele) => {
    return ele.toUpperCase();
});
console.log(upper);

// Same concept but only first alphabet upper case..
let first = container.map( (ele) => {
    return ele[0].toUpperCase() + ele.slice(1);
});
console.log(first)