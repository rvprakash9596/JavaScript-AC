//Synchronous Programming
/*
console.log("One");
console.log("Two");
console.log("Three");
console.log("Four");
*/

// Asynchronous Programming
/*
console.log(`Hello will be printed in 2  second`);
function hello(){
    console.log("Hello");
}
setTimeout(hello,2000); // 2s = 2000ms , we always gives timer in milisecond
*/

//using arrow function
/*
setTimeout(()=>{
    console.log("Hello");
},2000); // timeout
*/


//                                  Really Example of Asynchronous Programming
/*
console.log("One");
console.log("Two");
setTimeout(()=>{
    console.log("Hello");
},4000); // async programming
console.log("Three");
console.log("Four");
*/


//                                      Callback
//Example 1
/*
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(5,2,sum); // sum is a callback which is passed as an argument inside another function.
*/

//Example 2
/*
const hello = () =>{
    console.log("Hello Bhai..");
};
setTimeout(hello,4000); //hello is a callback which is passed as an argument inside another function 
*/

//                                  Callback Hell
//Nesting
/*
for(let i=0; i<5; i++){
    let str = "";
    for(j=0; j<5; j++){
        str = str + j;
    }
    console.log(i,str);
}
*/

//Checking data1 is available or not. and so on.......
/*
function getData(dataId,getNextData){
    //2s
    setTimeout(()=>{
        console.log("Data =",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}
console.log("Getting data");
//callback hell
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4);
        });
    });
});
*/

// for solving callback hell problem , promises comes.


//                                          Promises
/*
let promise = new Promise((resolve,reject) =>{
    console.log("I am a promise");
    // resolve("Success");
    reject("some error occured");
})
*/


//Example
/*
function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data",dataId);
            resolve("Successfull");
            if(getNextData){
                getNextData();
            }
        },5000);
    });
};
*/

/*
const getPromise = () =>{
     return   new Promise((resolve,reject)=>{
        console.log("I am a promise");
        // resolve("Success");
        reject("Network Error");
    });
};

let promise = getPromise();
promise.then((res)=>{
    console.log("promise fulfilled",res);
});

promise.catch((err)=>{
    console.log("Rejected",err);
});
*/

//                                      Promise Chain :

// Example 1 Promise Chaining
/*
function asyncFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Some data1");
            resolve("Success");
        },2000);
    });
}
console.log("Fetching data 1");
let p1 = asyncFunc();
p1.then((res)=>{
    console.log(res);
});
*/


// Example 2 Promise Chaining
//Example to First fetching ID from API then show login UI
/*
function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Login ID = XYZ");
            resolve("Details Found Successfully");
        },4000);
    });
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Enter Login ID");
            resolve("Enter Password");
        },4000);
    });
}
console.log("Fetching Account Details");
let p1 = asyncFunc1();
p1.then((res)=>{
    console.log(res);
    console.log("Now Login");
    let p2 = asyncFunc2();
    p2.then((res)=>{
        console.log(res);
    });
});
*/

// Promise Chain
//Same example using promise chain in JS
/*
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data",dataId);
            resolve("Successful");
        },2000);
    });
};
console.log("Getting Data1....");
getData(1)
    .then((res)=>{
        console.log("Getting Data2....");
        return getData(2);
    })
    .then((res)=>{
        console.log("Getting Data3....");
        return getData(3);
    })
    .then((res)=>{
        console.log(res);
    });

*/

//                                              Async-Await


//Example1
/*
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000);
    });
}

async function getWeatherData(){
    await api();//1st call
    await api();//2nd call

}
*/

//Example2
/*
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data",dataId);
            resolve("Successful");
        },2000);
    });
}

//Async-Await
async function getAllData(){
    console.log("Getting Data1");
    await getData(1);
    console.log("Getting Data2");
    await getData(2);
    console.log("Getting Data3");
    await getData(3);
}


//promise chain
console.log("Getting Data1....");
getData(1)
    .then((res)=>{
        console.log("Getting Data2....");
        return getData(2);
        })
    .then((res)=>{
        console.log("Getting Data3....");
        return getData(3);
    })
    .then((res)=>{
        console.log(res);
});


//callback hell
getData(1, ()=>{
    console.log("Getting Data2..");
    getData(2 , ()=>{
    console.log("Getting Data3");
    getData(3, ()=>{
    console.log("Getting Data4");
    getData(4);
        });
    });
});
*/

//                                      IIFE
//Example of IIFE
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data",dataId);
            resolve("Successful");
        },2000);
    });
}

async function getAllData(){
    console.log("Getting Data1");
    await getData(1);
    console.log("Getting Data2");
    await getData(2);
    console.log("Getting Data3");
    await getData(3);
}

(async function (){
    console.log("Getting Data1");
    await getData(1);
    console.log("Getting Data2");
    await getData(2);
    console.log("Getting Data3");
    await getData(3);
}) ();



