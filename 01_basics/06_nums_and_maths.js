// // const score=500
// // console.log(score)

// // const balance = new Number(1000)
// // console.log(balance)                 //  Number hain yeh

// // console.log(balance.toString())     // Now, converted to string 

// // console.log(typeof balance.toString())   // type --- String

// // // Ab jb string bn hi gya to external properties aa jayegi..

// // console.log(balance.toString().length)  // 4

// // console.log(balance.toFixed(2)) // 1000.00
// // console.log(balance.toFixed(3)) // 1000.000

// // const nums=123.897
// // console.log(nums.toPrecision(4))  // Approximate value deta hain

// // const hundreds=100000000
// // console.log(hundreds.toLocaleString())  // (,) lga ke value ko shape deta hai(for US)

// // console.log(hundreds.toLocaleString('en-IN'))


// // //  ************************** MATHS ******************************************


// // console.log(Math) // Object [Math] {}

// // console.log(Math.abs(-11))  //  11
// // console.log(Math.abs(11))   //  11

// // console.log(Math.round(5.7)) // 6
// // console.log(Math.round(5.3)) // 5

// // console.log(Math.ceil(11.1)) // 12   ceil -- mtlb top means high value
// // console.log(Math.floor(11.9)) // 11  floor -- mtlb down means low value

// // console.log(Math.min(2,7,17,3,11)) // Gives the Minimum Value
// // console.log(Math.max(1,11,18,89,6,19,10))  // Gives the Maximum Valuess

// //  ---------------- IMP cheez -------------------

// console.log(Math.random())  // yeh hamesha alg alg value deta hai from range(0,1)

// console.log(Math.random())*10  // range (0,1)

// console.log((Math.random()*10) + 1)  // isme 1 se badi value hi aayegi

// console.log(Math.floor(Math.random()*10) +1) // Yeh exact value dega.. .ie 1,6,7 etc


const min=10
const max=20     // 10 aur 20 ke beeche hi value aayegi

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
