// array method 
// 1.Map 
let arr=[2,4,5,6,2];

arr.map((value)=>{
    console.log(value);
});

// map is use to make new array 
let indian_cricketer=["rohit","virat","dhoni"];

let cricketer=indian_cricketer.map((value)=>{
    return value;
})
console.log(cricketer);

// this will use when squareroot
let number=[34,56,322,11];
let squareroot=number.map((num)=>{
    return num*num;
})

console.log(`the squareroot of ${number} is ${squareroot}`);

// 2.filter-Creates a new array of elements that give true for a condition/filter
let marks=[34,56,12,11,38,90,45,20,30];
let fail=marks.filter((value)=>{
    return value<33;
})
let pass=marks.filter((value)=>{
    return value>33;
})
console.log(marks);
console.log(fail);
console.log(pass);

//3. reduce-Performs some operations & reduces the array to a single value. It returns that single value.
let arr1=[1,2,3,4,5,6,7,8,9,10];
let arr1output=arr1.reduce((result,current)=>{
    return result=result+current;
})
console.log(arr1output);

// to find largest element in the array 
let arr1output1=arr1.reduce((result,current)=>{
    return result>current?result:current;
})
console.log(arr1output1);
// for smallest less than use simple 
