//                                            Loops And Strings in JavaScript

//Loops in JavaScript : Loops are used to execute a piece of code again and again.

/*
console.log("Ravi Prakash");
console.log("Ravi Prakash");
console.log("Ravi Prakash");
console.log("Ravi Prakash");
console.log("Ravi Prakash");
*/

// for loop

/*
let count;
for(count=1; count<=10; count++)
{
    console.log("Ravi Prakash"); 
}
*/


/*
let i;
for(i=1; i<=5; i++)
{
    console.log("i = ",i); 
}
*/


// To calculate sum of 1 to 5
/*
let sum=0;
for(let i=1; i<=5; i++)
{
    sum=sum+i;
}
console.log("Sum = ",sum);
console.log("Loop has ended..");
*/


// To calculate sum of 1 to n
/*
let sum=0;
let n=50;
for(let i=1; i<=n; i++)
{
    sum=sum+i;
}
console.log("Sum = ",sum);
console.log("Loop has ended..");
*/


// Infinite Loops :  A loop that never ends.. Infinite Loop hme kbhi nhi krna hai apne program me.
/*
for(let i=1; i>=0; i++)
{
    console.log("i =",i);
}
*/


// While loop
/*
let i=1;
while(i<=5)
{
    console.log("i =",i);
    i++;
}
*/


/*
let i=1;
while(i<=10)
{
    console.log("Ravi Prakash");
    i++;
}
*/


// Do while loop
/*
let i=10;
do{
    console.log("Ravi Prakash");
    i++;
}
while(i<=10);
*/
/*
let i=1;
do{
    console.log("i = ",i);
    i++;
}
while(i<=10);
*/

// for-of loop : it works on character of string .
// for-in loop : Used for apply loop on Objects.
//==============================================================================================

/*
let str="Ravi Prakash";
for(let i of str)
{
    console.log("i = " ,i);
}
*/

/*
let str="Ravi Prakash";
let  size=0;
for(let i of str)
{
    console.log("i = " ,i);
    size ++;
}
console.log("Size of Str = ",size);
*/


// for-in loop : Used for apply loop on Objects.
/*
let student={
    Name:"Ravi Prakash",
    Branch:"CSE",
    Age:21,
    CGPA:8.55,
    isPass:true
};
console.log(student);
for(let i in student)
{
    // console.log("Keys = ",i,"Values = ",student[i]);//returns only keys
    console.log("key =",i);
}
*/

//Let's Practice : On Loops
//==============================================================================================
//Q1. Print all even numbers from 0 to 100.

/*
for(let i=0; i<=100; i++)
{
    if(i%2==0)// for even number
   // if(i%2!==0)// for odd number

    {
        console.log("Even Number =",i);
    }
}
*/

//Q2. Create a game where you start with any random game number . Ask the user to keep guessing the game number until the user enters correct value.

/*
let gameNumber = 21;
let userNumber = prompt("Guess the Game Number : ");
while(userNumber != gameNumber)
{
    userNumber = prompt("You Entered wrong number . Guess Again! : ");
}
console.log("Congratulations! , you entered the right number ...");

*/


//                                           Strings in JavaScript
//                                          =======================

// Strings are immutable in JavaScript

/*
let str1="Ravi Prakash";
let str2="Saurabh";
console.log(str1);
console.log("Length of ",str1," = ",str1.length);
console.log(str2);
console.log("Length of ",str2," = ",str2.length);


// access using index of string
console.log(str1[0]);
console.log(str1[1]);
console.log(str1[2]);
console.log(str1[3]);
*/

/*
let obj={
    item:"Pen",
    price:10
};
console.log("The price of ",obj.item,"is",obj.price,"Rs.");

//              OR  using template literals

let output = `The cost of ${obj.item} is ${obj.price} Rupees`;
console.log(output);
*/

// Template Literals
/*
let sentence=`This is a template Literals`;
console.log(sentence);
console.log(typeof(sentence));
*/

// Escape Characters:
/*
let s="Ravi Prakash";
console.log(s.length);
console.log("Ravi\nPrakash");
console.log("Ravi\tPrakash");
*/

//String Methhods in JavaScript :
//-------------------------------
/*
There are built-in functions to manipulate a string.

.str.toUpperCase()
.str.toLoverCase()
.str.trim() // removes whitespace
.str.slice(start,end?)//returns part of string
.str1.concat(str2) //joins str2 with str1
.str.replace(searchVal,newVal)
.str.charAt(idx)
*/

/*
let str="ravi prakash bansal iet lko";

console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str);

console.log(str.trim()); // removes whitespaces from begining and last

let str1 = "Ravi Prakash";
console.log(str1.slice(2,7));

let str2="Saurabh Kumar";
console.log(str2.concat(str1));

console.log(str1.replace("Ravi","Sonu"));

console.log(str1.charAt(5));
*/


//Let's Practice :
//===============================
/*
Q1. Prompt the user to enter their full name. Generate a username for them based on the input . Starts username with @, followed by their full name and ending with the full name length.

eg. user name="raviprakash",username should be "@raviprakash11"
*/
let fullname=prompt("Enter Your Full Name Without Space :");
let username="@"+fullname+fullname.length;
console.log(username);