// // Now, Object singleton or by using constructors

// //const tinderUser=new Object()

// //console.log(tinderUser) // empty  {}
// // Also :--

// //const tinderUser={}

// // tinderUser.id="786@ali"
// // tinderUser.name="saif"
// // tinderUser.isLoggedIn=true

// //console.log(tinderUser)




// const regularUser={
//     fullName:{
//         userFullName:{
//             firstName:"saif",
//             lastName:"ali"
//         }
//     }
// }

// console.log(regularUser.fullName.userFullName)


// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}
// const obj3={5:"e",6:"f"}

// const obj4={...obj1, ...obj2, ...obj3}
// console.log(obj4)

// // *******************  Ab Dekho !! *********************

// const users=[
//     {
//         id:1,                           // 0-index
//         email:"ali@gmail.com"
//     },

//     {
//         id:2,
//         email:"hero@gmail.com"            // 1-index
//     },

//     {
//         id:3,
//         email:"sher@gmail.com"           // 2-index
//     }

// ] 

// // To access it.... 

// users[0].email

// console.log(users[0].email)


// const tinderUser={
//     address:"gkp",
//     name:"saif ali",
//     rollno:52,
//     isLoggedIn:true
// }

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))


// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// console.log(tinderUser.hasOwnProperty('isLogged'))

//--------------------------------------------------------------------------------------

const course={
    courseName:"Js in Hindi",
    coursePrice:999,
    courseInstructor:"Boom Boom Afridi"
}

course.courseInstructor //   Boom Boom Afridi Dega.....i.e  :--

console.log(course.courseInstructor) 

const {courseInstructor:jiii}=course  //  Ise khete hai Object de-structrueing

console.log(jiii)


//--------------------- JSON Declaration Dekho ----------------

{
    "name":"Boom Boom",
    "rollno":52,
    "email":"ali@1234567"
}


[            // Json ko aise bhi likhte hai, wo aage dekhenge..........
    {},
    {},
    {}
]

