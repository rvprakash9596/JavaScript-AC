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

//Example1
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

//Example2
/*
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
*/

//Example3
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

// Inheritance
//example1
/*
class Parent{
    hello()
    {
        console.log("Hello Bhai Kaise ho tum ?..");
    }
}
class Child extends Parent{
    mai(){
        console.log("Mai to thik hun , tu bata kaisa hai ?");
    }
}
let obj =new Child();
*/

//Example2
/*
class Person{
    eat(){
        console.log("Eating");
    }
    sleep(){
        console.log("Sleepimg");
    }
    work(){
        console.log("Do Nothing..");
    }
}
class Engineer extends Person{
    work(){
        console.log("Solve Ploblems , Build Something");
    }
}
class Doctor extends Person{
    work(){
        console.log("Treat Patients");
    }
}
let obj = new Engineer();
*/

//Example3 Constructor in Inheritance
/*
class Person{
    constructor(){
        this.species = "Homo Sapiens"
    }
    eat(){
        console.log("Eating");
    }
    sleep(){
        console.log("Sleepimg");
    }
    work(){
        console.log("Do Nothing..");
    }
}
class Engineer extends Person{
    work(){
        console.log("Solve Ploblems , Build Something");
    }
}
class Doctor extends Person{
    work(){
        console.log("Treat Patients");
    }
}
let obj = new Engineer();
let obj2= new Doctor();
let obj3= new Person();
*/

// super keyword
//Example 1
/*
class Person{
    constructor(){
        console.log("enter parent constructor");
        this.species = "Homo Sapiens"
    }
    eat(){
        console.log("Eating");
    }
}

class Engineer extends Person{
    constructor(branch){
        console.log("enter child constructor");
        super();// to invoke parent class constructor
        this.branch = branch;
        console.log("exit child constructor");
    }
    work(){
        console.log("Solve Ploblems , Build Something");
    }
}
let engObj = new Engineer("Computer Science Engg");
*/

//Example 2
/*
class Person{
    constructor(name){
        this.species="Homo Sepiens";
        this.name=name;
    }
    eat(){
        console.log("Eating");
    }
}
class Engineer extends Person{
    constructor(name){
        super(name);
    }
    work(){
        super.eat();
        console.log("Solves Problem , build something");
    }
}
let engObj1 = new Engineer("Ravi Prakash");
*/


//                                          Let's Practice 
//                                      -----------------------

//Q1. You are creating a website for your college.Create a class User with 2 properties , name & email.It also has a method called viewData() that allows user to view website data.
/*
let DATA = "Secret Information";

class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("Data = ",DATA);
    }
}

let student1 = new User("Ravi Prakash","ravi@gmail.com");
let student2 = new User("Saurabh Kumar","sonu@gmail.com");

let teacher1 = new User("Dean","dean1@gmail.com");
let teacher2 = new User("HOD","hodbansal@gmail.com");
*/

//Q2. Create a new class Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data . 

let DATA = "Secret Information";

class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("Data = ",DATA);
    }
}

class Admin extends User {
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA = "Some new Value";
    }
}

let student1 = new User("Ravi Prakash","ravi@gmail.com");
let student2 = new User("Saurabh Kumar","sonu@gmail.com");

let teacher1 = new User("Dean","dean1@gmail.com");

let admin1 = new Admin("admin","admin@gmail.com");


//                                       Error Handling
//                                  ------------------------

let a = 5;
let b = 10;
console.log("a =",a);
console.log("b =",b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);
try{
    console.log("a+b=",a+c); //error
}
catch(err) {
    console.log(err);
}
console.log("a+b=",a+b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);



//Addition of two number
let x = prompt("Enter 1st Number : ");
let y = prompt("Enter 2nd Number : ");
let z = parseInt(x)+parseInt(y);
console.log(`${x} + ${y} = ${z}`);