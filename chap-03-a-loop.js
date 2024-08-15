// loop in js 
// 1. for loop
let i;
for(i=0;i<3;i++){
    console.log("i=",i)
}

// 2.while loop
let j=0;
while(j<2){
    console.log("j=",j);
    j++;
}

// 3.do while loop 
let k=0;
do{
    console.log("k=",k);
    k++;
}while(k<4);

// 4.for of loop 
let str="viratkohli";
for(value of str){
    console.log(value);
}

// use to print size of string 
let youtuber_name="saket";
let size=0;
for(value of youtuber_name){
    console.log(value)
    size++;
}
console.log(size);

// 5.for in loop 
const class_1={
    name:"jeel",
    idnumber:101,
    marks:199
}
for(key in class_1){
    console.log(key);
}
