// primitives
// 7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const value =20.9

const isLogIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')
// console.log(id === anotherid);

const bigNumber = 12345678910111213786786786n


// Reference/Non-primitive
// Arrays, Objects, Functions

const heros = ["Ali", "Usman", "Sultan"];
let myObj = {
    name: 'Mubashir',
    age: 21
}

const MyFunction = function(){
    // console.log("Hello World");  
}



// +++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(primitive), Heap(non-primitive)

let myname = "Mubashir"

let anotherName = myname
anotherName = "Ahmad"

console.log(myname);
console.log(anotherName);


let userOne = {
    name: "Ali",
    email: "ali@gmail.com"
}

let userTwo = userOne

userTwo.name = "Abdullah"
console.log(userOne);
console.log(userTwo);
