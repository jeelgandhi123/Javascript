// Get user to input a number using prompt(“Enter a number:”). Check if the number is a multiple of 5 or not.     
let number=prompt("Enter a number:");
if(number%5==0){
    console.log(number +" is multiply by 5")
}
else{
    console.log(number + " is not multiply by 5")
}


// Write a code which can give grades to students according to their scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let marks=34;
if(marks<=100 && marks>=80){
    console.log("you got A grade");
}
else if(marks>=70 && marks<=89){
    console.log("you got B grade");
}
else if(marks>=60 && marks<=79){
    console.log("you got C grade");
}
else if(marks>=50 && marks<=59){
    console.log("you got D grade");
}
else if(marks>=0 && marks<=49){
    console.log("you got F grade");
}
