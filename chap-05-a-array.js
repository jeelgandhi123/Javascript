// array in js 
let marks=[23,45,22,12,43];
console.log(marks);
console.log(marks[3]);//12

// array are mutable they can change 
marks[4]=11;
console.log(marks);

console.log(marks.length);

// print array 
for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}

for(value of marks){
    console.log(value)
}
