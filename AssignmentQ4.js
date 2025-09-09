// Use rest as well as perform an operation in an arry..
let info = {
    name: "rahul",
    age: 25,
};

let infor = {
    name: "Kalyani",
    age: 54,
};


let merge = { ...info, ...infor};
console.log(merge);