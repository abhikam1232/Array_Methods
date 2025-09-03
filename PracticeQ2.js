// Create a function to find a minimum number in an Array:- 
let numbers = [12, 4, 2,  45, 78, 20, 5052, 4, 55, 4];
let min = numbers.reduce( (ele, min) => {
    if ( ele>min){
        return min;
    } else{
        return ele;
    }
})
console.log(`Thus this is the minimum number >> ${min} << in an array`);

// Same finding minimum numbers by using loops:- 
// ...existing code...
let array = [45522, 255, 5, 2,  45252];
let minimum = array[0];
for ( let i=1; i<array.length; i++){
    if( array[i] < minimum){
        minimum = array[i];
    }
}
console.log(minimum);