//                                      Arrays in JavaScript


// Arrays is a collection of objects.

// Create Array :
// --------------
// let heros=["Ritik roshan","Rajnikant","Bacchan Ji","Charan Kumar"];
// let marks=[98,82,78,86,81];
// let info=["Ravi Prakash",86,"KLD"];


//1D array
let arr1=["grapes","banana","orange","papaya"];

//2D array
let arr2=[
    ["Apple","Vivo","Redmi"],
    ["Shirt","Paint","Coat"],
    ["Pen","Copy","Book"]
];

// using variables 
/*
console.log("JavaScript Arrays");

let marks_student1=98;
console.log(marks_student1);
let marks_student2=91;
console.log(marks_student2);
let marks_student3=90;
console.log(marks_student3);
let marks_student4=97;
console.log(marks_student4);
let marks_student5=99;
console.log(marks_student5);
*/

//using JS objects
/*
let marks={
    stu1:98,
    stu2:96,
    stu3:87,
    stu4:88,
    stu5:75,
};
console.log("Printing using JS Object");
console.log(marks);
*/

                                        //using Arrays
                                        //---------------
//Index matters In Arrays
//Arrays is a tyep of object. 
// in array we use indeces at the place of Object keys

/*
let marks=[97,82,56,84,88];
console.log(marks);
console.log("Length of arrays =",marks.length);
console.log("Type of Marks :",typeof(marks));


let heros=["Ritik roshan","Rajnikant","Bacchan Ji","Charan Kumar"];
console.log(heros);
console.log("Length of arrays =",heros.length);
console.log("Type of heros :",typeof(heros));
*/

//Indices 
/*
let marks=[97,82,56,84,88];
marks[2]=94.5;
// console.log(marks);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);//undefined
console.log(marks[10]); //undefined


//Changing marks value at any index
marks[3]=95.5;
console.log(marks[3]);
*/


//In JS Arrays are Mutable
//*Particular Index pr jaa kr hm apni index ki value change kr sakte hain.

//In JS Strings are Immutable
//*Particular Index pr hm apni index ki value ko directly change nhi kr sakte.

//                              Looping Over an Array
/*
let heros=["Ritik roshan","Rajnikant","Bacchan Ji","Charan Kumar"];
console.log(heros[0]);
console.log(heros[1]);
console.log(heros[2]);
console.log(heros[3]);
console.log(heros[4]); // undefined
*/

// iterable using for loop
/*
let heros=["Ritik roshan","Rajnikant","Bacchan Ji","Charan Kumar"];
for(let idx=0; idx<heros.length; idx++)
{
    console.log(heros[idx]);
}



// for-of loop : it works on character of string .
// for-in loop : Used for apply loop on Objects.

// iterable using for of loop
console.log("iterable using for of loop");
for(let i of heros)
{
    console.log(i);
}


let cities=["Delhi","Pune","Mumbai","Hyderabad"];
for (let city of cities)
{
    // console.log(city);
    console.log(city.toUpperCase());
}
*/



//                                  Practice Questions
//                          =================================

//Q1. For a given array with marks of students [85,97,44,37,76,60] , find average marks of the entire class.
/*
let marks=[85,97,44,37,76,60];
let sum=0;
for(let value of marks)
{
    console.log("Marks :",value);
    sum+=value;
}
console.log("Sum of total marks =",sum);
let avg=sum/marks.length;
// console.log("The average marks is =",avg);
console.log(`Average marks of the class = ${avg}`);
*/

//Q2.For a given array with prices of 5 items [250,645,300,900,50] . All items have an offer of 10% OFF on them . Change the array to store final price after applying offer.

//using for of loop
/*
let items=[250,645,300,900,50];
let i=0;
for(let value of items)
{
    // console.log(`Value at index ${i} = ${value}`);
    let offer=value/10;
    items[i]=items[i]-offer;
    console.log(`Value after Offer with 10% =${items[i]}`);
    i++;
}
*/

//using for loop
/*
let items=[250,645,300,900,50];
console.log("Items are :",items);

for(let i=0; i<items.length; i++)
{
    let offer=items[i]/10;
    items[i] -= offer;
}
console.log("After applying 10% Off on Items :",items);
*/



//                                      Array Methods
//                              ==========================


//Note : method name always starts from small letters.

//push()
//pop()
//toString() :It returns a new array
//concat() : joins multiple arrays and returns the new result.
//unshift(): add elements or array at the start.Works like push().
//shift(): Delets an element at the start . Works like pop().
//slice(): returns a piece of the array
//splice(): change original array (add,remove,replace).

/*
let foodItems=["Apple","Orange","Grapes","Banana"];
console.log(foodItems);


//push()
foodItems.push("Guavava");
console.log(foodItems);//adds guavava at end

foodItems.push("Chips","Burger","Cheese"); // adds these elements at the end
console.log(foodItems); 

//pop()
let deleteditems=foodItems.pop(); // delete last element cheese

console.log(deleteditems," Has Deleted ");
console.log(foodItems);

//toString()
console.log(foodItems.toString());// It returns a new array
console.log(foodItems);

let mar=[97,82,56,84,88];
console.log(mar);
mar.toString();
console.log(mar);

//concat()
let color1=["Red","Teal","Green","Warning"];
let color2=["Pink","Chill","Kro","Guys"];

let res=color1.concat(color2);//it doesn't change the original Array
console.log(res);
console.log(color1);
console.log(color2);

//unshift()
let heros=["Ritik roshan","Rajnikant","Bacchan Ji","Charan Kumar"];
console.log(heros);
heros.unshift("Ravi Prakash");// adds element at the start of index.
console.log(heros);

let val = heros.shift();
console.log(val,"is deleted now");// deletes element at the start of index
console.log(heros);
*/

/*
//slice()
let heros=["Ritik roshan","Rajnikant","Bacchan Ji","Charan Kumar"];
console.log(heros);
console.log(heros.slice(2)); // sometimes we use slice() to copy of array
console.log(heros);


//splice():it takes three parameter
// splice(startIdx,delCount,newEl1....)
//Ex: [45,12,41,22,57,87,62,20]
//splice(2,2,100,200);
//finally res = [45,12,100,200,57,87,62,20]

let ele=[45,12,41,22,57,87,62,20];
console.log(ele);
ele.splice(2,2,100,200);
console.log(ele); //res = [45,12,100,200,57,87,62,20]

//Add Element
ele.splice(1,0,277);
console.log(ele);//[45, 277, 12, 100, 200, 57, 87, 62, 20]

//Delete Element
ele.splice(3,1);
console.log(ele); //[45, 277, 12, 200, 57, 87, 62, 20]

//Replace Element
ele.splice(3,1,111);
console.log(ele);//[45, 277, 12, 111, 57, 87, 62, 20]

ele.splice(4);
console.log(ele);//[45, 277, 12, 111]

*/

//                                  Practice Questions
//                          =================================

// Q1. create an array to store companies :- "Bloomberg","Microsoft","Uber","Google","IBM","Netflix".
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);

// Q2. remove the first company
companies.shift();
console.log(companies);//['Microsoft', 'Uber', 'Google', 'IBM', 'Netflix']

// Q3. remove Uber & add Ola in it's place.
companies.splice(1,1,"Ola");
console.log(companies);//['Microsoft', 'Ola', 'Google', 'IBM', 'Netflix']

// Q4. Add Amazon at the end 
companies.push("Amazon");
console.log(companies);
