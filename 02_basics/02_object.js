// Now, Object singleton or by using constructors

//const tinderUser=new Object()

//console.log(tinderUser) // empty  {}
// Also :--

//const tinderUser={}

// tinderUser.id="786@ali"
// tinderUser.name="saif"
// tinderUser.isLoggedIn=true

//console.log(tinderUser)




const regularUser={
    fullName:{
        userFullName:{
            firstName:"saif",
            lastName:"ali"
        }
    }
}

console.log(regularUser.fullName.userFullName)


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

//const obj4=Object.assign({},obj1,obj2,obj3)

const obj4={...obj1,  ...obj2 }

console.log(obj4)