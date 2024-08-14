//Day 1 Variables And DataTypes in JavaScript


// console.log("Ravi Prakash");
// console.log("Welcome to the world of javaScript");

// fullname="Ravi Prakash";
// console.log(fullname);

// age=21;
// console.log(age);

// price=99;
// console.log(price);

// x=null; // pta to hai ki iske andar kya hai pr iske andar ek khali value hai.
// console.log(x);

// y=undefined;  //iska mtlb "pta hi nhi ki iske andar kya hai" 
// console.log(y);

// isFollow=false;
// console.log(isFollow);

// isFollow=true;
// console.log(isFollow);

//                                            Variables in JS
//-----------------------------------------------------------------------------------------------

// fullname=21; // dynamically typed language
// console.log(fullname);

// fullname="Ravi Prakash";
// FULLNAME="Saurabh Kumar";
// console.log(fullname);
// console.log(FULLNAME);

// _fullname="Ravi";
// console.log(_fullname);
// $fname="Ravi Prakash";
// console.log($fname);

// Using let keyword

// let Full_Name = "Ravi Prakash";
// let age = 21;
// let totalSalary = 45000;
// console.log(Full_Name);
// console.log(age);
// console.log(totalSalary);

// Using var keyword (using var is old model)

// var Full_Name = "Ravi Prakash";
// var age = 21;
// var totalSalary = 45000;
// console.log(Full_Name);
// console.log(age);
// console.log(totalSalary);
// //Example
// var age=24;
// var age=87;
// var age=21;
// console.log(age);// output will be 21

//we can't do as follow
// let age=21;
// let age=21;


// we can do it by using following
// let age=21;
// age=24;
// age=30;
// console.log(age);//30


// const age=21;
// age=27; // we can't use by this
// console.log(age);


// let a;
// console.log(a);//undefined

// block scope variables
// {
//     let a=5;
//     console.log(a);
// }
// {
//     let a=12;
//     console.log(a);
// }

//                                  Data Types in JS
//-----------------------------------------------------------------------------------------------
//Number , String , Boolean , Undefined , Null , BigInt , Symbol

// let age=21;//number
// let price=100.50; //number

// fullName="Ravi Prakash"; //string

// isFollow=true;//boolean

// let x; //undefined

// let x1=null; //object

// let num=BigInt("123"); //bigint

// let y=Symbol("Hello ");//Symbol

const student={
                fullName:"Ravi Prakash",
                age:21 ,
                cgpa:8.56,
                isPass:true
                };

                //OP {fullName: 'Ravi Prakash', age: 21, cgpa: 8.56, isPass: true}

console.log(student["age"]);
console.log(student["fullName"]);
//or
console.log(student.age);
console.log(student.fullName);

student["name"]="Saurabh Kumar";
console.log(student.name);



