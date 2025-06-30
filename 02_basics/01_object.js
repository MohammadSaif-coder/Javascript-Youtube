// These all are java Literals

const userObj={
    name:"boom boom",
    email:"saif@786gmail.com",
    age:22,
    rollno:52,
    isLoggedIn:true,
    weekend:["Thrusday","Saturday"]
}

// console.log(userObj.name)  // Note::  To access the name,email,age etc of an object we 
// console.log(userObj.age)  //    simply use .  operators i.e::
// console.log(userObj.email)//         userObj.name,userObj.age etc.....
// console.log(userObj.isLoggedIn)
// console.log(userObj.weekend)
// console.log(userObj.rollno)

// // Second method to access an object...

// console.log(userObj["name"])
// console.log(userObj["email"])
// console.log(userObj["age"])

// console.log(userObj)

//----------------- Thoda Function ke upr bhi dekh lo ----------------------

userObj.greeting=function(){
    console.log("Hey Javascript Users..")
}

userObj.greeting2=function(){
    console.log(`Hello Master of Javascript ,${this.name}`)
}

console.log(userObj.greeting())
console.log(userObj.greeting2())
