// Write code to print each number multiplied by 2 using forEach.
let nums = [ 2, 4, 6, 8, 10];

let result = ( (elements) => {
    console.log(elements*2);
});

nums.forEach(result);

// Q2. Use map to return a new array where the first letter of each name is capitalized.
/** let names = ["abhishek", "raj", "neha", "aisha"];

let upper = names.map( (ele) => {
    return ele.toUpperCase;
});

console.log(upper); **/

// Q3. Use filter to create a new array containing only the ages that are 18 or above.

let ages = [12, 17, 18, 20, 14, 25, 30];
let isAdult = ages.filter( (age) =>{ // This step is only possible because filter alawasy us to print the array which has a bool true
    return age >= 18;

});

console.log(isAdult); // this will only print the ages which are 18 or above 18;

// Q4. Use map to create a new array containing the squares of each number.
let numbers = [3, 7, 9, 12, 15];

let output = numbers.map( (elements) => {
    return elements*elements;
});
console.log(` This is my ORG array:- 3, 7, 9, 12, 15 and this is my Squared array:- ${output}`);

// Q5. First use filter to select only words that have more than 5 letters, then use forEach to print each of those words in uppercase.

let words = [ "pen", "notebook", "eraser", "sharpner", "book"];

let finalResult = words.filter((elements) => {
    return elements.length > 5;
});


finalResult.forEach( (elements) => {
    console.log(elements.toUpperCase());
});


/**Q6.  Filter the numbers to keep only those greater than 10.
Map the filtered numbers to their double values.
Use forEach to print each of the doubled values. **/

let container = [ 5, 12, 8, 130, 44, 7, 3, 20];

let ans = container.filter( (elements) => {
    return elements > 10;
})

ans = ans.map((elements) => {
    return elements*2;
});

ans.forEach((elements) => {
    console.log(elements);
})
console.log(ans);

// Q7 Filter out students who scored less than 50 (fail). & Map the remaining students to extract only their names in uppercase. & Use forEach to print each name one by one:- 

let students = [
    {
        name: "Abhishek",
        marks: 35,
    },

    {
        name: "Neha",
        marks: 80,
    },

    {
        name: "Raj",
        marks: 55,
    },

    {
        name: "Aisha",
        marks: 90,
    },

    {
        name: "Rohit",
        marks: 45,
    },

]
console.log(` This is my Orignal array:-`, students);

let score = students.filter( (ele) => {
    return ele.marks > 50;
});

let uppernames = score.map((ele) => {
    return ele.name.toUpperCase();
});

uppernames.forEach( (ele) => {
    console.log(ele);
});
console.log(`These students have passed:- and their names in upper case:- ${uppernames}`);