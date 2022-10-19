// Using loops with arrays  //

// let num = [12,13,14,15,16];
// for(let i=0;i<num.length;i++)
// {
//     console.log(num[i]);
// }

//A. forEach()   // When we have to do any operation
// Description : This method can help you to loop over array,s items.

// const arr = [1, 2, 3, 4, 5, 6];
// arr.forEach(index => {
//     console.log(index);
// })

// B. Array from
// let name = "krishan";
// let arr= Array.from(name);
// console.log(arr);


// C. for of
// let num = [12,13,14,15,16];
// for(let i of num){
//     console.log(i);
// }


// D. for in    // returns key value 
// let num1=[131 ,121,111,124,101];
// for(let i in num1){
//     console.log(i);
// }



// E.  Map() array   for crate new array
// // array map method
//  No changes new array

// let arr =[45,32,21,12]
// let a=arr.map((value,index,array)=>{
//     console.log(value,index,array);
//     return value+2;
// })
// console.log(a);



// filter() method   
// No changes original array

// let arr2=[32,12,14,54,3,1,4,6,5];
// let a2=arr2.filter((a)=>{
//     return a>10;
// })
// console.log(a2);


// reduce()
// let arr3 = [1, 2, 3, 4, 5, 6];
// let new_arr= arr3.reduce((h1,h2) => {
//     return h1 +h2;
// })
// console.log(new_arr);

//  2 method
// let  arr3 = [1,2,3,5,6,10];
// const reduce_func = (h1,h2) =>{
//     return h1 + h2
// }
// let newarr3 = arr3.reduce(reduce_func)
// console.log(newarr3);




//              *****************************  Practice set  ******************** 
// let arr = [1,2,3,4,5,6,7];
// let a = window.prompt("Enter a number");
// a = Number.parseInt(a)
// arr.push(a);
// console.log(arr);


// practice problem 2
// keep adding number to the array in 1 until 0 is added to the array
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let a;
// do {
//     a = prompt("Enter a number");
//     arr.push(a);
// } while (a != 0);
// console.log(arr);


// problem 3
//filter for numbers divisble by 10 from a given array
// let arr1 = [13, 14, 20, 340, 450, 330];
// let arr = arr1.filter((x) => {
//     return x % 10 == 0;
// })
// console.log(arr);


// problem 4
// let arr1=[13,14, 20, 340, 450, 330];
// let arr = arr1.map((x) => {
//     return x * x;
// })
// console.log(arr);


let arr1=[1,2,3,4];
let arr = arr1.reduce((x1,x2) => {
    return x1 * x2;
})
console.log(arr);
