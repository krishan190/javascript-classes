// loop
// for loop
// for(init,condition,incre,decre)


// for (let i = 0; i <=5; i = i + 1) {
//         console.log(i);
// }


// for (let i = 0; i <=5; i = i + 1) {
//     console.log(`${i}`);
// }


// let mobile = ["mobile1","Mobile2","Mobile3","mobile4"]
// for(let i=0;i<mobile.length;i++){
//     console.log(mobile[i]);
// }

// let mobile = ["mobile1", "Mobile2", "Mobile3", "mobile4"];
// let phone = [];
// for (let i = 0; i < mobile.length; i++) {
//     phone.push(mobile[i].toUpperCase());
// }
// console.log(phone);



// let i = 0;
// while (i <= 5) {
//     console.log(i);
//     i = i + 1;
// }



// do while loop
// let i=0;
// do{
//     console.log(i);
//     i=i+1;
// }while(i< 5);


// for of => Array ke sath hamesha use hota hai
// let tech = ["HTML", "CSS", "TAILWIND", "JAVASCRIPT", "REACT.JS", "NODE.JS", "EXPRESS", "MONGODB"];
// for (let mern of tech) {
//     console.log(mern);
// }

// let mobile = ["Mobile1","Mobile2","Mobile3","Mobile4"]
// for(let i=0;i<mobile.length;i++){
//     if(mobile[i]== "Mobile3"){
//         break;
//     }
//     console.log((mobile[i]));
// } 


// Object
// [] = Always Array
// {} = Always object {key:value}

// let userDetails = {
//     firstName: "krishan",
//     lastName: "Namdev",
//     company: "iNeuron",
//     loginCount: "25",
//     role: "student",
//     login: "true",
// };
// console.log(userDetails.firstName);
// console.log(userDetails.lastName);
// console.log(userDetails["firstName"]); //This is not good practice


//object on hold
// Functions

// function square(num){
//     // let num = 2;
//     console.log(num * num);
// }
// square(2);


// Rairly used this function
// function areaofCircle(r) {
//     let area = Math.PI * r * r;
//     return area;
// }
// let result = areaofCircle(7);
// console.log(result);

// function sumOfAll(){
//     console.log(arguments);
//     let sum = 0;
//     for(let i=0;i< arguments.length;i++){
//       sum=sum+arguments[i];
//     }
//     return sum;
// }
// console.log(sumOfAll(16,20,30,40,50,60,70));


//Arrow function 

// let sumOfAll = (x, y) => {
//     let sum = x + y;
//     return sum;
// }

// console.log(sumOfAll(1, 2));

// let xyz = function(){};

//object begins


let userDetailsCourse = {
    firstName : "krishna",
    lastName : "Namdev",
    role : "student",
    loginCount : 25,
    googleLogin : true,
    courseList : [],
    buyCourse : function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount : function(){
        return `${this.firstName} is have a course count of ${this.courseList.length}`;
    },
};
// console.log(userDetailsCourse);
userDetailsCourse.buyCourse("Pro frontend Dev");
userDetailsCourse.buyCourse("pro frontend Dev v2");
console.log(userDetailsCourse.getCourseCount());