console.log("JavaScript Functions And Methods");

//log()// it is a function
/*
let a="ravi prakash".toUpperCase();
console.log(a);
*/

//Creating Own Function

//Method 1
/*
function demo()
{
    console.log("Hello Friends!");
    console.log("Kaise Ho Saare");
}
demo();
demo();


//Method 2
function demo2(msg)// parameter ==> Input
{
    console.log(msg);
}
demo2("I Love JavaScript !!!"); //argument  ==>value


//Method 3
function myFunction(msg1,n)// parameter ==> Input
{
    console.log(msg1,n);
}
myFunction("I Love Database !!!",2051); //argument  ==>value
*/

//Method 4
/*
function sum(x,y)
{
    console.log(x+y);
}
*/

//Method 5
/*
function sum(x,y)
{
    res=x+y;
    return res;
}
*/


//Method 6
/*
function sum(x,y)
{
    //local variable ==> scope till here
    res=x+y;
    console.log("Before return");
    console.log(x);
    return res;
    console.log("After return");//This statement will never be executed.
}
let val=sum(5,8);
// console.log(x);
console.log("Sum =",val);
*/
//Note: x,y are local variable . Their scope is block scope of functions.


//                                      Arrow Functions
//                                  =======================

// .Compact way of writing a functions.

// Syntax:
// -------

// const functionName=(param1,param2,...)=>{
// //do-somw work
// }

/*

//sum functions
function sum(a,b){
    return a+b;
}

//moder JS
const arrowSum=(a,b)=>{
    console.log("Sum =",a+b);
};

const mul=(a,b)=>{
    console.log(a*b);
    // return a*b; //we can do this also
};


const printHello=()=>{
    console.log("Hello");
};
*/

//                                          Let's Practice
//                              =====================================

//Q1. create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the String.
//Ex:: Hello
// vowels=4

/*
function countVowels(str)
{
    //"Ravi Prakash";
    let count=0;
    for(const char of str){
        if(
            char==="a" ||
            char==="e" ||
            char==="i" ||
            char==="o" ||
            char==="u"
        ) {
            count++;
        }
    }
    // console.log(count);
    return count;
}
*/


//Q2. Create an arrow function to perform the same task.
/*
const countVow=(str)=>{
    let count=0;
    for(const char of str)
    {
        if(
            char === "a"||
            char ==="e"||
            char==="i"||
            char==="o"||
            char==="u"
        ){
            count++;
        }
    }
    return count;
}
*/



//                                  forEach Loop in Arrays
//                              =============================

/*
let arr=[1,2,3,4,5];
arr.forEach(function printVal(val){
    console.log(val);
})
*/


// let arr=[1,2,3,4,5];
/*
let cities=["Delhi","Mumbai","Lucknow","Jaipur"];
cities.forEach((val,idx,cities)=>{
    console.log(val.toUpperCase(),idx,cities);
});
*/



//                              Let's Practice
//                          =====================

//Q1. For a given array of numbers , print the square of each value using forEach loop.
//Method 1
/*
let arr=[1,2,3,4,5];
arr.forEach((arr)=>{
    console.log(arr*arr);
})
*/


//Method 2
/*
let nums = [22,33,10];
let calcSquare = (nums) =>{
    console.log(nums*nums);
};
nums.forEach(calcSquare);
*/


//                                      Some More Array Methods
//                                  -------------------------------
//1. map()

/*
let num = [5,10,15,20];
let newArr = num.map((val)=>{
    return val*2;
});
console.log(newArr);
*/

//2. filter()

/*
let arr = [5,10,15,20];
let evenArr = arr.filter((val)=>{
    return val%2===0; //even
    return val%2!==0; //odd
});
console.log(evenArr);
*/

//3.reduce()
/*
let arr = [1,2,3,4];
const output = arr.reduce((prev,curr)=>{
    return prev+curr;
})
console.log(output);
*/
/*
let arr = [5,6,2,1,67,3];
const output = arr.reduce((prev,curr)=>{
    return prev>curr ? prev : curr;
})
console.log(output);
*/


//                                        Let's Practice 
//                                    ----------------------

//Q1. We have given array of mark's of students . Filter out marks of student that scored 90.
/*
let marks=[87,93,68,92,88,87];
let toppers = marks.filter((val)=>{
    return val>90;
})
console.log(toppers);
*/

//Take a number n as input form user . Create an array of numbers from 1 to n.Use the reduce method to calculate sum of all numbers in the array.Use the reduce method to calculate product of all numbers in the array.

let n = prompt("Enter a number : ");
let arr = [];//n=5
for(let i=1; i<=n; i++){
    arr[i-1]=i; // 1(0),2(1),3(2),4(3).....
}
console.log(arr);

let sum=arr.reduce((res,curr)=>{
    return res+curr;
});
console.log("The sum = ",sum);

let factorial=arr.reduce((res,curr)=>{
    return res*curr;
});
console.log("Factorial = ",factorial);