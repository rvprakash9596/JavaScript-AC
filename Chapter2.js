// JS Lecture 2(Operators and Conditional Statements)
// const a="hello bhai kaise hai tu.."; //string'

//Single line comments

/* 
multi-line comments
This code prints Hello JS
*/

// console.log("Hello JS");

// Arithmetic Operators
// let a=5;
// let b=2;
// console.log("a =",a,"\nb =",b);
// // console.log(a+b);
// console.log(" a + b = ",a+b);
// console.log(" a - b = ",a-b);
// console.log(" a * b = ",a*b);
// console.log(" a / b = ",a/b);
// console.log(" a % b = ",a%b);
// console.log(" a ** b = ",a**b);//Exponentiation

// // Unary Operator

// console.log(++a);// 6 pre-increment operator
// console.log(a++);// 6 post-increment operator
// console.log(a); //7

// console.log(a--); // 7post-decrement
// console.log(--a); // 5 pre-decrement
// console.log(a);//5

// Assignment Operator

// let a=5;
// let b=2;
// // a+=4;
// // a*=4;
// // a/=4;
// // a%=4;
// a**=4;
// console.log(a);

// Comparison Operator :

// let a=5;
// let b=2;
// console.log(a==b); // false
// console.log(a!=b); // true
// console.log(a<b); // false
// console.log(a>b); // true
// console.log(a>=b);//true
// console.log(a<=b);//false


// let b=10;
// let c="10";
// console.log(b==c);//true

// let d=5;;
// let e="5";
// console.log(d==e);//true
// console.log(d===e);//false
// console.log(d!==e);//true

// Logical Operators
// let a=6;
// let b=5;
// let cond1=a>b;
// let cond2=a===6;
// console.log(cond1 && cond2);//true
// console.log(cond1 || cond2);//true
// console.log(!cond2);//false

// console.log(a>b || b>a);//true
// console.log(a>b && b>a);//false
// console.log(!(b>a))//true
// console.log(!b===a);//false

// Conditional Statement

/*let age=24;
if(age>18)
{
    console.log("You are eligible for DL");
}*/

/*
let age=24;
if(age>20)
{
    console.log("You Can Vote");
}
else{
    console.log("You Can't Vote");
}
*/

/*
let mode="dark";
let color;
if(mode==="dark")
{
    color="black";
}
if(mode==="light")
{
    color="white";
}
console.log(color);
*/

/*
let mode="light";
let color;
if(mode==="dark")
{
    color="black";
}
else{
    color="white";
}
console.log(color);//white
*/

/*
let age=25;
if(age>18)
{
    console.log("Your Can Vote");
}
else{
    console.log("Not Vote");
}
*/

/*
const num=4;
if (num%2===0)
{
    console.log("Number is Even");
}
else
{
    console.log("Number is Odd");
}
*/

// else-if Statement
/*
let mode="blue";
let color;

if(mode==="dark")
{
    color="black";
}
else if(mode==="blue")
{
    color="red";
}
else if(mode==="pink")
{
    color="green";
}
else{
    color="white";
}
console.log(color);

*/


// Ternary Operators
/*
let age=25;
let res= age>18? "You are eligible for Vote" : "You are not eligible for Vote";
console.log(res);
*/


// switch Statements
/*
let fruit="Grapes";
switch(fruit)
{
    case "Papaya":
        console.log("This is a papaya");
        break;
    case "Mango":
        console.log("This is a Mango");
        break;
    default:
        console.log(`Sorry! , we don't have found your ${fruit}.`);
}
*/


// Addition by user input.......
/*
let n1=parseInt(prompt("Enter 1st Number :"));
let n2=parseInt(prompt("Enter 1st Number :"));
let res=n1+n2;
console.log("The Values is :"+res);
*/