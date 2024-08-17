let arr=[23,11,231,321,34];
const printvalue=(value)=>{
    console.log(value);
}
arr.forEach(printvalue);


let cricketer=["virat","rohit","kane"];
cricketer.forEach((val,index,cricketer)=>{
    console.log(index,val.toUpperCase(),cricketer);
});


// practise set 
// For a given array of numbers, print the square of each value using the forEach loop.

let number=[22,34,100,43,66,78,43,21,40];

const countsquareroot=(value)=>{
    console.log(value*value)
}

number.forEach(countsquareroot);
