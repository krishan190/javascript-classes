// // switch  Case
// // Mini app based on user

// let user = "student";
// switch (user) {
//     case "admin":
//         console.log("You have got full access to the website");
//         break;
//     case "mentor":
//         console.log("You have got course Access");
//         break;
//     case "student":
//         console.log("You have got access to purchased course Access");
//         break;
//     default:
//         console.log("You are Normal User");
// }

// Date

// let now = new Date();
// console.log(now.toString());

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getTime());

// console.log(now.getMinutes());
// console.log(now.getMonth());
// console.log(now.getHours());


//Array
//  const Arr1=[];
//  console.log(Arr1);

// let Arr1=["krishna","Namdev","Anurag","Shubham"];
// console.log(Arr1);
// console.log(Arr1[2]);   Searching element Based on string

// let price = ["anurag", "sudhir", "Deepak", "Shubham","HiteshSir","Ankur"];
// console.log(price);

// price.push("Aman");
// console.log(price);

// let names = ["anurag", "sudhir", "Deepak", "Shubham","HiteshSir","Ankur"];
// console.log(names.length);
// console.log(names[names.length - 1]);

// console.log(names.slice(1,3));  //1 is included and 3 is excluded

// names.splice(index,howmany,item) ***************
// let names = ["anurag", "sudhir", "Deepak", "Shubham","HiteshSir","Ankur"];
// names.splice(2,1,"item 1","Item 2","item 3");
// console.log(names);

// let names = ["anurag", "sudhir", "Deepak", "Shubham","HiteshSir","Ankur"];
// let lastname = ["abc","def","jkl","krishan"];
// let middleName = [1,2,3,4,5];
// let fullName = names.concat(lastname , middleName);
// console.log(fullName);


//copy Within        ********************
// let numbers = [1,2,3,4,5,6,7];
// console.log(numbers.copyWithin(1,3,7));

// let names = ["anurag", "sudhir", "Deepak", "Shubham","HiteshSir","Ankur"];
// console.log(names.includes("HiteshSir",2));  //HomeWork
// console.log(names);

// console.log(names.indexOf("Ankur"));

// console.log(Array.isArray(names));

// let numbers = [1,2,3,4,5,5,6,7,8,8,9,2,3,4,5,6,7,7,8];
// console.log(numbers.lastIndexOf(3));

// let num = [1,4,9,16,25];
// console.log(num.map(Math.sqrt));

// let num = [15,41,91,16,25];
// console.log(num.pop());
// console.log(num.shift());
// console.log(num);
// console.log(num.reverse());
// console.log(num.sort());


// console.log(num.unshift(91,71));
// console.log(num);

// let names = "Javascript";
// let namess = names.split("");
// console.log(namess);


let company = "iNeuron , facebook , amazon, google";
let com = company.split(",");
console.log(com);