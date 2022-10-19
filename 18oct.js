// for in (object)
// Higher order function (callback,setting Time)
// Functional Programming



// for of loop for array
// for in loop for object  // return key value(object)


// let userDetails = {
//     firstName: "krishna",
//     lastName: "Namdev",
//     Role: "admin",
//     loginCount: 25,
// };

// for (let obj in userDetails){
//     // console.log(obj);
//     // console.log(userDetails[obj]);
//     console.log(`The key is ${obj} and the value is ${userDetails[obj]}`);
// }

// HOF  (functional programming) (isme ham pura ka pura function as a parameter passs kar sakte hai)
// Definition : Higher order function are a function which takes other fucntion as a parameter or return a function as a value 

// callback    ********************
// Arrow function                          (=> fat arrow)

// const back = (n) => {
//     return n ** 2;
// }

// function cube(back, n) {
//     return back(n) * n;
// }
// console.log(cube(back, 4));


// time
//SetTimeOut()

// function courseName() {
//     console.log("Welcome to the javascript");
// }
// setTimeout(courseName, 2000);


// standard practice
// setTimeout(()=>{
//     console.log("welcome in Javascript");
// },2000);



// set Interval

// setInterval(()=>{
//     console.log("Daily college");
// },2000)


// Functional programming 
// Defi : Instead of writing regular loops latest javaScript introduction lots of built in methods which can help us to solve complicated problems

// forEach is callback function

// const arr1 = ["Hey", "Hi", "namaste", "hello", "Hola"];
// arr1.forEach((val) => console.log(val));



// Map:

// const arr1 = [1, 2, 3, 4, 5];
// const var1 = arr1.map((val1) => console.log(val1 * val1));

// const names = ["hi", "hello", "krishan", "Rishi", "Deepak"];
// names.map((names) => console.log(names.toUpperCase()));
// console.log(names.map((names) => names.toUpperCase()));

//filter

// const count = ["India", "Japan", "Germany", "Nepal", "Finland", "kenya", "Egypt", "Ireland"];
// let arg1 = count.filter((arg) => arg.includes("ia"));
// console.log(arg1);


// Reduce

// const num = [1,2,3,4,5,6];
// const sum = num.reduce((acc,current)=> acc + current,3);     // (accumlator,current)
// console.log(sum);



// Destructuring ,spread and Rest Operator

// const sci = [2.72, 3.14, 9.81, 37, 37, 100,10000,152,167,];
// let [e, pi, g, bt, boilingt] = sci;
// console.log(e, pi, g, bt, boilingt);

// const sci = [2.72, 3.14, 9.81, 37, 37, 100,10000,152,167,52];
// let [num1, num2, ...rest] = sci;
// console.log(num1,num2,rest);


// spread and Rest op
// function sumOne(x, y) {
//     return x + y;
// }
// let var1 = [5, 4];
// console.log(sumOne(...var1));

function sumTwo(...args){
    let sum = 0;
    for (const x of args){
         sum = sum + x;
    }
    return sum;
}
console.log(sumTwo(1,2,3,4,5,6,7,8,9));