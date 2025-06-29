// DataTypes are of two Types......!!

//Primitive (7-types) :- Numbers,boolean,null,undefined,symbol,BigInt,string.
//Examples are given accorgingly...

const score=7;                  // Numbers
const valueScored=100.2;

const isLoggedIn=true;         // boolean ... and so on...

const outsideTemp=null;

let userEmail;

const id=Symbol('1234567');

const bigNumber=125678101895447886;

const str="Mohammad saif Ali";



// Non-primitive..(Reference DataTypes)

// Arrays..
const arr=["saif","kaif","hero","sher"];

//Objects..
const  myObj={
    name:"saif",
    age:21,
};

//Functions..
const myFun=function(){
    console.log("Allah Hu Akbar!!")
}


//********************************** */

// Stack and Heap In Javascript...........

// Stack(Primitive)   and    Heap(Non-Primitive)

let myGitHubname="Mohammad Saif Coder"

let anotherName="boom boom"

console.log(myGitHubname)

console.log(anotherName)

let userOne={

    email:"saif@google.com",

    Upi:"user@icici"

}

let userTwo=userOne

userTwo.email="boomboom@786gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
