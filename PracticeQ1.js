// Check if all the numbers in an array are multiples of 10 or not..
let array = [10, 20, 30, 70, 500, 5020, 4620];

let result = array.every( (elements) => {
    return elements %10 == 0;
})
console.log(`If it is multiple by 10 than it has ${result}`);

// Plus we will return which is the greater number..

let max = array.reduce( (ele, max)=> {
    if ( ele>max){
        return ele;
    }
    else if( ele <max){
        return max;
    }
})
console.log(`This is the greater number among the multiple of 10s array ${max}`);
