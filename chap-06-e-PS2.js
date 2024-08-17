// We are given array of marks of students. Filter our of the marks of students that scored 90+.

let marks=[33,45,6,7,89,9,90,91,32,99];
let topper=marks.filter((value)=>{
    return value>=90;
})
console.log(topper);

// Take a number n as input from user. Create an array of numbers from 1 to n. 
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.

let n=prompt("enter number:");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr)

let sum=arr.reduce((result,current)=>{
    return result+current;
});
console.log(sum);

let product=arr.reduce((result,current)=>{
    return result*current;
});
console.log(product);
