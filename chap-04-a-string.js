// string in js 
let str="jeel gandhi";
console.log(str.length);
console.log(str[0]);

// template litrals
console.log(`hello ${str} how are you??`);

// string methods
console.log(str.toLowerCase());//not change original string...

str=str.toUpperCase();//to change original string...
console.log(str);

console.log(str.trim());

console.log(str.slice(1,4));// 1 to 3 will print 4 not print...

let str1="virat";
let str2="kohli";
let fullname=str1.concat(str2);
console.log(fullname);//viratkohli

console.log(str.replace("GANDHI","MODI"));//JEEL MODI

console.log(str.charAt(3));//L
