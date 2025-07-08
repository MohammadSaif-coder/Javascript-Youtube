// function sayMyName(){
//     console.log("S")
//     console.log("A")
//     console.log("I")
//     console.log('F')
// }

// sayMyName()

// function addTwoNum(num1,num2){

//        console.log(num1+num2)
// }
// addTwoNum(2,7)
// // --------------------------------------------

// function multiplyTwoNums(nums1,nums2){
//         console.log(nums1*nums2)
// }

// multiplyTwoNums(11,11)

// //---------------------------------------------------------------

// function subTwoNum(num1,num2){
//     return num1-num2
// }

// const result=subTwoNum(2,12)

// console.log("Result::",result)

// // Dekho parameters kaise liye jate Hain...

// function loginUserMessage(userName){
//     return `${userName} is Logged In`
// }

// console.log(loginUserMessage("Mohammad Saif Ali Khan"))

//************* Functions with Objects *****************************/


function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,700,1700))

const user={
    userName:"Mohammad Saif Ali",
    coursePrice:999
}

function handleObject(anyObject){
    console.log(`User Name is ${anyObject.userName} and the Course Price is ${anyObject.coursePrice}`)
}

// handleObject(user)

/// Also.......

handleObject({
    userName:"Boom Boom",
    coursePrice:200000
})


//####################### Functions with Arrays #########################

const arr=[100,200,300,400,500,600]
function returnValue(getArray){
    return getArray[5]
}

console.log(returnValue(arr))