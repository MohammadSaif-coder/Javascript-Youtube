let score="17abc"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber=Number(score)    // Yeh string  ko number me convert kr dega......

console.log(typeof valueInNumber)
console.log(valueInNumber)

//Notes.......

//"33" ko hum convert krte hain number me i.e 33 toh wo ho jataa hainn.
// "33abc"  => NaN deta hai, i.e not a number   NaN ka type number hain
// true => 1 , false => 0 convert hota hai..


let isLoggedIn=1

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// empty string " " => false
//   "saif ali" => true

// Converting number into String.........!!!

let someNumber=77;
console.log(someNumber)
console.log(typeof someNumber)
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)