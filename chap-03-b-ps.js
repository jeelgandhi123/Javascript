// write a code to print even number between 1 to 100
for(let i=0;i<100;i++){
    if(i%2==0){
        console.log(i);
    }
}

// Create a game where you start with any random game number. Ask the user to keepguessing the game number until the user enters correct value
let randomnumber=Math.floor(Math.random()*100);
let usernumber=prompt("enter your number:");
let count=0;
while(usernumber!=randomnumber){
   usernumber=prompt("wrong! enter again:");
   count++;
    if(usernumber>randomnumber){
        alert("guess less number");
    }
    else{
        alert("guess large number");
    }
}
console.log("congratulations!! right guess! you guess in "+count+" th try!!");
console.log(randomnumber);
