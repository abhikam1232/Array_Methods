let names = ["Abhishek", "Samarth", "Pranav"];
let [development, Automation, ML] = names;
console.log(development, Automation, ML);

// Use array destructuring with rest to store the first two fruits separately and the rest in another array.
let fruits = ["apple", "mango", "pineaaple", "custurdapple", "jackfruit"];
let [ first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

// Destructing in objects:- 
let information = {
    name: "Abhi",
    class: "BE",
    gradutaion: 2026,
    username: "abhikamXYZ",
    pass: "XYZ",
}

let { username: user, pass: password} = information;
console.log(information);
console.log(`This is the username which has var ${user} and ${password}`);


/** Use object destructuring to extract brand and model into separate variables.
Store the remaining properties (processor, ram, storage) into another object using rest (...).
Print both results. */

let laptop = {
    brand: "Dell",
    model: "Inspiron",
    processor: "i5",
    ram: "16GB",
    storage: " 512GB SDD",
}

let { brand: company, model: type, ...another}  = laptop;

console.log(` This is brand which I have stored in my variable company:- ${company}`);
console.log(` This is the model which I have stored in varible type:- ${type}`);
console.log(" These are the other key value pairs", another);;