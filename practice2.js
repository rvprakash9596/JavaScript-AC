// let's Practice

// alert("Hello Bhai "); // Creates one time pop-up

/*let name=prompt("Hello");
console.log(name);*/
// prompt("kaise ho"); // Takes input

/*Q1. Get user to input a number using prompt("Enter a number : "). Check if the number is a multiple of 5 or not.
let num=prompt("Enter a number : ");
if(num%5===0)
{
    console.log(num ," is Multiple of 5");
}
else
{
    console.log(num ,"is not multiple of 5");
}
*/


/*Q2. Write a code which can give grade to students according to their scores.
90-100 A
70-89 B
60-69 C 
50-59 D 
0-49 F*/

let score=prompt("Enter your score : ");
// let score=95;
let grade;
if(score>=90 && score<=100)
{
    grade="A";
}
else if(score>=70 && score<=89)
{
    grade="B"
}
else if(score>=60 && score<=69)
{
    grade="C";
}
else if(score>=50 && score<=59)
{
    grade="D";
}
else if(score>=0 && score<=49)
{
    grade="F";
}
// else{
//     grade="F"
// }
console.log("According to your scores , Your grade is : ",grade);