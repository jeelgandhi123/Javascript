// variables in js 
age=23;
radius=3.14;
isfollow=true;
a=null;
x=undefined;
fullname="jeel";

console.log(typeof age)
console.log(typeof radius)
console.log(typeof isfollow)
console.log(typeof a)
console.log(typeof x)
console.log(typeof fullname)


// let var and const in js 
var example1=23;
let example2=34;
{
    var example1=24;
    let example2=42;
    console.log(example1,example2);//it will give 24 and 42
    // let is block constrain
}
console.log(example1,example2);//it will give 24 and 34

const example4="string"
// const example4=12; this will be error............


// object in js 
const class_1={
    name:"jeel",
    idnumber:101,
    marks:199
}
console.log(class_1);
console.log(class_1.name);
class_1.idnumber=121;
console.log(class_1.idnumber);




