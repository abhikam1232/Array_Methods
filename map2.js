// Create an array in which contain object of info of students and than modify and create a new array bby converting the marks into gpa..

let information = [
    {
        name: "pranav",
        marks: 95,
    },

    {
        name: "Abhishek",
        marks: 87,
    },
];

let sgpa = information.map( (elements) => {
    return elements.marks/10;
});

console.log(sgpa);