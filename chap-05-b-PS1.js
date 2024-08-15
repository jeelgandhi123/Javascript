// For a given array with marks of students -> [85, 97, 44, 37, 76, 60] Find the average marks of the entire class. 
let marks=[85, 97, 44, 37, 76, 60];
let sum=0;
for(let i=0;i<marks.length;i++){
    sum=sum+marks[i];
}
let average=sum/marks.length;
console.log(average);

// For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let items=[250, 645, 300, 900, 50];
for(let i=0;i<items.length;i++){
    let discount=items[i]/10;
    items[i]=items[i]-discount;
}
console.log(items);
