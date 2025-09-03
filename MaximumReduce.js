// This method is done by using reduce.. Finding the maximum
let arr = [1,22, 455, 456, 411, 5112, 45];
let max = arr.reduce( (ele, max) => {
    if ( ele>max){
        return ele;
    } else{
        return max;
    }
});
console.log(max);

// Now we will use loops for that same method:- 
let myArray = [ 1, 2, 5, 45, 855, 100, 8000];

let total = -1;

for ( let i=0; i<myArray.length; i++){
    if ( total < myArray[i]){
        total = myArray[i];

    }
}
console.log(total);