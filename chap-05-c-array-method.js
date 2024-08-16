let cricketer=["viratkohli","msdhoni","abdevilliers","kanewilliamson"];
// push-add element in last
cricketer.push("rohitsharma","hardikpandya");
console.log(cricketer);

// pop-delete last element
deltedcricketer=cricketer.pop();
console.log(cricketer);
console.log(deltedcricketer);

// toString-convert array to string
console.log(cricketer.toString());

// concat-add 2 array
let class1=[101,"jeel",'A'];
let class2=[102,"hemi",'B'];
console.log(class1.concat(class2));

// unshift-add any Element in starting 
let marks=[23,12,11,45,2];
marks.unshift(10);
console.log(marks);

// shift-delete Element in starting 
let marks1=[23,12,11,45,2];
marks1.shift();
console.log(marks1);

// slice 
console.log(marks1.slice(0,3));

// splice 
let arr=[1,2,3,4,5,6,7,8,9]
arr.splice(1,3,1021,1022,1023);
console.log(arr);
