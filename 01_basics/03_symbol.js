const id=Symbol("123")
const anotherId=Symbol("123")

console.log(id === anotherId) //false


const bigNumber = 123456789987654n

console.log(typeof bigNumber)

let myobj = {
    myname:"rishi",
    age : "25",
    gender : "male"
}


const func=()=>{
    console.log("hello")
}

const arr=["1","2"]
console.log(typeof myobj)
console.log(typeof func) //function object 
console.log(typeof arr) //object
