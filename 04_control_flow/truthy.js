const UserEmail = []
// if (UserEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user name");
// }

// Falsy Values
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// Truthy values
// "0", "false", " ", [], {}, function() {}

// if(UserEmail.length === 0){
//     console.log("This is an empty array");
// }

// const emptyObject = {}

// if (Object.keys(emptyObject).length === 0){
//     console.log("This is an empty object");
// }


// Null Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 20
val1 = undefined ?? 10 ?? 20
// console.log(val1);


/* Ternary Operator 
syntax:    condition ? true : false
*/

2 == 2 ? console.log("Two is equal to two") : console.log("Not equal");


