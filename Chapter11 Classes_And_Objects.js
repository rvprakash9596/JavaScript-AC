//                              Lecture - 11 Classes & Objects
//                      ==============================================


//Creating a normal object....

const student = {
    fullName:"Ravi Prakash",
    marks:88,
    printMarks:function(){
        console.log("Marks = ",this.marks);// student.marks
    }
};


// Prototype examples in JS

const employee = {
    calcTax(){
        console.log("Tax rate is 10%");
    },
    calcTax2 : function (){
        console.log("Tax Rate is 10 %");
    }
};

const karanArjun = {
    salary :12000,
    calcTax(){
        console.log("Tax rate is 20%");
    }
};
karanArjun.__proto__=employee; //karanArjun.employee
karanArjun.__proto__=student; //karanArjun.printMarks


// Creating Classes

/*
class ToyotaCar{
    start(){
        console.log("Start the Car");
    }
    stop(){
        console.log("Stop the Car");
    }
    setBrand(brand){
        this.brandName = brand;
    }
}

// Creating Objects

let fortuner = new ToyotaCar();
fortuner.setBrand = "fortuner";
let lexus = new ToyotaCar();
lexus.setBrand("lexus");
*/

// Constructor

/*
class ToyotaCar{
    //Creating Constructor
    constructor(brand) {
        console.log("Creating New Object..");
        this.brand = brand;
    }
    start() {
        console.log("Start the Car..");
    }
    stop() {
        console.log("Stop the Car..");
    }
}

let fortuner = new ToyotaCar("Fortuner");  // constructor
let lexus = new ToyotaCar();    // constructor
*/

class ToyotaCar{
    //Creating Constructor
    constructor(brand,milage) {
        console.log("Creating New Object..");
        this.brand = brand;
        this.milage = milage;
    }
}
let fortuner = new ToyotaCar("Fortuner",10);  // constructor
console.log(fortuner);
let lexus = new ToyotaCar("Lexus",12);    // constructor
console.log(lexus);


/* //This is a Simple Example of Constructor......
class company{
    constructor(name,turnOver){
        console.log("Creating Company");
        this.name=name;
        this.turnOver=turnOver;
    }
}
let cmp1 = new company("HCL",100000);
console.log(cmp1);
let cmp2 = new company("TCS",150000);
console.log(cmp2);
*/

//






