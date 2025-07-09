// if

// if(2=="2"){
//     console.log("Executed")   // yeh execute ho jayega ...
// }

// if(2==="2"){
//     console.log("Executed")   // yeh error dega bcoz (===) yeh strictly check krta hai 
// }

// const temp=41

// if(temp<50){
//     console.log("Temp is less Than 50")
// }

// else{
//     console.log("Temperature is Greater Than 50")
// }

// const score=200

// if(score>100){
//      const power="fly"
//      console.log(`User Power: ${power}`)
// }

// const balance=1000

// if(balance<500){
//     console.log("Less than 500");
// }

// else if(balance<750){
//     console.log("Less than 750")
// }

// else if(balance<900){
//     console.log("Less than 900")
// }

// else{
//     console.log("Balance is less than 1200")
// }


const userLoggedIn=true
const userDebitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn && userDebitCard && 2==3){  // AND operator
    console.log("User can access to course..")
}

if(loggedInFromGoogle || loggedInFromEmail){  //  OR operator 
    console.log("User can learn and enroll to our course")
}