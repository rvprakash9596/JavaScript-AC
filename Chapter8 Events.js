// Events in JS :
// --------------

let btn = document.querySelector("#btn1");
btn.onclick=()=>{
    console.log("Btn was clicked");
    let a = 20;
    console.log("a =",a);
    a++;
    console.log(`The value of a become ${a}`);
}

/*
btn.onclick=()=>{
    console.log("Handeler 2 was clicked");
    let a = 20;
    console.log("a =",a);
    a++;
    console.log(`The value of a become ${a}`);
}
*/ //This handler will be overrided

let box = document.querySelector(".box");
box.onclick=()=>{
    box.style.backgroundColor="teal";
    box.style.color="white";
}


// Event Object Started..
let btn2 = document.querySelector("#btn2");
btn2.onclick=(e)=>{
    console.log(e.type);
    console.log(e.target);    
    console.log(e.clientX,e.clientY);
}


// Event Listeners : Add
let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click",()=>{
    console.log("Event Listener was clicked 1");
});
btn3.addEventListener("click",()=>{
    console.log("Event Listener was clicked 2");
});

let handler3 = () =>{
    console.log("Event Listener was clicked 3");
}

btn3.addEventListener("click",()=>{
    console.log("Event Listener was clicked 4");
});

// Event Listeners : Remove
// let btn4 = document.querySelector("#btn3");
btn3.removeEventListener("click",handler3);


                                                // Let's Practice :
                                            // =======================
//Q1. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
//Method1
/*
let modeBtn = document.querySelector("#mode");
let currMode = "light";//dark
modeBtn.addEventListener("click",()=>{
    if(currMode === "light"){
        currMode = "dark"
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currMode);
});
*/

//method2
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";//dark
modeBtn.addEventListener("click",()=>{
    if(currMode === "light"){
        currMode = "dark"
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});