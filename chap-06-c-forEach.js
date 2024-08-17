// foreach loop in array 
let arr=[23,11,231,321,34];
arr.forEach((value) => {
    console.log(value);
});

let cricketer=["virat","rohit","kane"];

cricketer.forEach((val,index,cricketer)=>{
    console.log(index,val.toUpperCase(),cricketer);
});

// practise set 
// For a given array of numbers, print the square of each value using the forEach loop.

let number=[22,34,100,43,66,78,43,21,40];

number.forEach((value)=>{
    console.log(value*value);
});
