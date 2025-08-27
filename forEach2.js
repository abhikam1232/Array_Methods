let array2 = [2, 4, 6, 8, 10, 12, 14];

let result = ( (elements) => {   // These are basicallt foEach using Arrow Functions:- 
    console.log(elements);
});

array2.forEach(result);

// For each using and Object:- 

let info = [
    {
        name: "Abhishek",
        designation: "Full-stack",
    },

    {
        name: "Pranav",
        designation: "Ml-Engineer",
    },

    {
        name: "Samarth",
        designation: "Automation",
    }
]

info.forEach((info) => {
    console.log(info.designation);
});

info.forEach((info) => {
    console.log(info.name);
});


// In terms of basic example of Fruits:- 
let fruits = ["apple", "mango", "pineapple", "jackfruit"];

fruits.forEach((things) =>{
    console.log(things);
});