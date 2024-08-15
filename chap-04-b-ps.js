// Prompt the user to enter their full name. Generate a username for them based on the input.Start username with @, followed by their full name and ending with the fullname length eg: user name =“shradhakhapra”, username should be “@shradhakhapra13”

let userinput=prompt("enter your name:");
let str3=userinput.length;
let str1='@';
let concat_username=str1+userinput+str3;
console.log(concat_username);
