// let a=10;
// const b=20;
// var c=30;

// console.log(a)
// console.log(b)       // They all are global Scope..
// console.log(c)

// console.log("Local scppe dekho........... ")

// {
//     let x=70;
//     const y=100;

//     console.log(x)  // 70
//     console.log(y) //  100

// }

// console.log(x)   // Reference Error
// console.log(y)  //  Reference Error

// // Lec==2 --------------------------------------------------------

function one(){                      // ise hum closure bhi bolte hai fun ke andr fun..
    const userName="Mohammad Saif Ali"
    function two(){
        const website="Youtube"
        console.log(userName);
    }
    //console.log(website)

   two()

}
one()


if(true){
    const UserName="Boom Boom"
    if(UserName==="Boom Boom"){
        const Web="NetFlix"
        console.log(UserName+Web)
    }
}