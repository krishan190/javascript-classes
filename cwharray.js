// let num = [1,2,4,5,6];
// let r = num.push(32);
// console.log(num,r);
// r returns new length of the array


// let num1 = [1,2,4,5,6];
// let r1 =num1.pop();
// console.log(num1,r1);

// let num = [1,2,3,4,5,6,7,8,9]
// console.log(num.length);
// delete num[0];
// console.log(num.length);


//  concatenation
// let num1 = [1, 2, 3, 5, 6, 7, 8, 9];
// let num_more = [11, 12, 13, 14, 15, 16, 17];
// let num_even_more = [211,121,231,211,123,232,212];
// let new_array = num1.concat(num_more,num_even_more);
// console.log(new_array);
// console.log(num1, num_more);

// sort methods
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229];
// num.sort();
// console.log(num);  //Alphabetically sort 



// // sort Method
// let compare = (a, b) => { 
//     return b-a;
// }
// let num1 = [551, 22, 3, 13, 5, 6, 7, 8, 229]
// num.sort(compare);
// console.log(num);    // sort by desceding order


// splice means deleted values
// let num = [551,22,3,14,5,6,7,8,229]
// let deletedvalues=num.splice(2,4,1023,1024,1025,1026);
// // concept (postion to add,no of elements to remove,elements to be added)
// console.log(num);
// console.log(deletedvalues);

// slice
// let num = [551,22,3,14,5,6,7,8,229];
// let newNum = num.slice(3,8);  // 8 index is excluded
// console.log(newNum);
// console.log(num);



// array fill  : this methods returns an array by filling all elements with specified values

// let fruits=["apple","mango","banana","grapes"];
// fruits.fill("cherry",1,2);
// console.log(fruits);


// copywithin
let fruits=["apple","mango","banana","grapes","pineapple","guava"];
fruits.copyWithin(3,1);
console.log(fruits);