

// alert("Hello");
// alert("Ravi Prakash");


// Window Object
/*
console.log("Hello1");
window.console.log("Hello2");
window.alert("Hii");
*/


//                                          DOM

// Touching HTML Code Through JavaScript is called DOM.
// document.body.style.background="teal"; // changing background at runtime in console
// document.body.style.color="green";
// document.body.childNodes[1].innerText="Hello Bhaiwa";
// document.body.childNodes[5].innerText="Tooooo";

/*
window.console.log("Hello2");
console.dir(window);
console.dir(window.document);
console.dir(document.body);
console.dir(document.head);
console.dir(document.body.childNodes[1]);
console.dir();
*/

// We use DOM for Dynamic Change of Document through the browser console.

//                                  DOM Manipulation

// Selecting with id
// document.getElementById("myId");

// // Selecting with class
// document.getElementByClassName("myClass"); //returns HTML Collection

// // Selecting with log
// document.getElementByIdTagName("p");

// let heading = document.getElementById("heading");
// console.dir(heading);

// let head = document.getElementsByClassName("myClass");
// console.dir(head);
// console.log(head);

// let para = document.getElementsByTagName("p");
// console.dir(para);
// console.log(para);

//Query Selector

// let ele = document.querySelector("p"); // first element returns
// console.dir(ele);


// let allele = document.querySelector("p"); // first element returns
// console.dir(allele);



// let ele = document.querySelectorAll(".myClass"); // all elements
// console.dir(ele);

// let btn=document.querySelectorAll("#myBtn");
// console.dir(btn);

// let div = document.querySelector("div");
// console.dir(div);

/*
div.innerText;
'Fruits\nApple\nMango\nGrapes'
div.innerHTML;
'\n    <h2>Fruits</h2>\n    <ul>\n        <li>Apple</li>\n        <li>Mango</li>\n        <li>Grapes</li>\n    </ul>\n'
*/

//                                      Let's Practice 
//                                  ======================

//Q1. create a h2 heading element with text - "Hello javaScript" . Append "from Apna College students" to this text using JS.
let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText+" from Apna College Students"; // concatenate



//Q2. create 3 divs with commnon class name - "box".Access them & add some unique text to each of them .

// Method 1
/*
let divs = document.querySelectorAll(".box");
divs[0].innerText="New Value1";
divs[1].innerText="New Value2";
divs[2].innerText="New Value3";
*/



//Method 2
let divs = document.querySelectorAll(".box");
let idx =1;
for(div of divs){
    div.innerText=`new unique val ${idx}`;
    idx++;
}
