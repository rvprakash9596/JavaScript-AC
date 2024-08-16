// // console.log("hello");
// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// // div.setAttribute("id","Hello");
// console.log(id);

// let name = div.getAttribute("divName");
// console.log(name);


// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));


// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));


/*
let div = document.querySelector("#box1");
console.log(div);
div.style.backgroundColor="green";
div.style.backgroundColor="aqua";
div.style.fontSize="30px";
div.innerText="hello";
*/

//                                  DOM Insert Elements :
//                                  ---------------------

/*
let newBtn = document.createElement("button");
newBtn.innerText="Click Me";
newBtn.style.backgroundColor="aqua";
newBtn.style.margin="30px";
console.log(newBtn);
let div = document.querySelector("div");
div.before(newBtn);
*/


//create element in DOM
/*
let newHeading = document.createElement("h1");
newHeading.innerHTML="<i> I am New </i>";
document.querySelector("body").append("I have added by append method");
let para = document.querySelector("p");
*/

/*
para.remove();
newHeading.remove();
*/


                                            //let's Practice 
                                            //---------------

//Q1. Create a new button element. Give a text "click me",background color of red & text color of white . Insert the button as the first element inside the body tag.
let btn = document.createElement("button");
btn.innerText="click me";
btn.style.backgroundColor="red";
btn.style.color="white";
document.querySelector("body").append(btn);
console.log(btn);


//Create a <p> tag in html , give it a class & some styling. Now create a new class in css and try to append this class to the <p> element. Did you notice , how you overwrite the class name when you add a new one ? solve this problem using classList.
let para = document.querySelector("p");
para.setAttribute("class","newClass");
para.classList.add("newClass");
para.classList.add(".newClass");


