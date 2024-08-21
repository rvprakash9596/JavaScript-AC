//Example1
/*
const URL = "https://cat-fact.herokuapp.com/facts";
let promise = fetch(URL);
console.log(promise);
*/

//Example2
/*
const URL = "https://cat-fact.herokuapp.com/facts";
const getFacts = async ()=>{
    console.log("Getting data ...");
    let response = await fetch(URL);
    console.log(response);//JSON Formats
    // console.log(response.status);
    let data = await response.json();
    console.log(data[0].text);
}
*/

//Example3
/*
const URL = "https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact");
const btn = document.querySelector("#btn");
const getFacts = async ()=>{
    console.log("Getting data ...");
    let response = await fetch(URL);
    console.log(response);//JSON Formats
    // console.log(response.status);
    let data = await response.json();
    factPara.innerText = data[1].text;
}
btn.addEventListener("click",getFacts);
*/

//Example4 promise chaining
/*
const URL = "https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact");
const btn = document.querySelector("#btn");
function getFacts(){
    fetch(URL)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        factPara.innerText = data[2].text;
    });
}
btn.addEventListener("click",getFacts);
*/

