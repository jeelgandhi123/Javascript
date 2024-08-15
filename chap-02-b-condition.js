// conditional statment in js 
// 1.if 

let age=23;
if(age>18){
    console.log("adult")
}

// 2.if else 
let age1=12;
if(age1>18){
    console.log("adult")
}
else{
    console.log("not adult")
}

// 3.if elseif else 
let bloodgrp='a';
if(bloodgrp='a'){
    console.log("Your blood group is a");
}
else if(bloodgrp='b'){
    console.log("Your blood group is b");
}
else{
    console.log("please enter your correct blood");
}

// 4.switch case
let day=1;
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("please enter correct number!!")
} 

// 5.ternary operator
let AGE=23;
age>18?console.log("adult"):console.log("not adult");
