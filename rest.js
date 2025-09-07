// Rest is used when we don't know how many arguments to pass in a function
function prod(...args)  {
    return args.reduce( (acc, num) => (acc*num));
}
console.log(prod( 2, 3, 4, ));