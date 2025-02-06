//SingleTon
// Object.create (constructor method)

// Object Literals

const mysym = Symbol("Key1")
const JsUser = {
    name: "Ali",
    "Full Name": "Mubashir Ahmad",
    Age: 20,
    [mysym]: "MyKey1",
    "qualification": "Graduate",
    email: "ali@gmail.com",
    Isloggedin: false
}
// Method to acces an object
// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]); //we cannot acces the element of an object which is declared as a string.
// console.log(JsUser[mysym]);

JsUser.name = "Mubashir Ahmad"
// Object.freeze(JsUser) //freeze method is used to freeze the object value that cannot be chaned later
JsUser.name = "Abdulah"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function() {
    console.log(`Hello Js users, ${this["Full Name"]}`);  
    console.log(`${JsUser.greeting()}, ${this["Full Name"]}`);  
}
console.log(JsUser.greetingTwo());
