
const isUserLogin = true;

// if( 2 === "2"){
//     console.log("executed");
// }

// <, >, <=, >=, ==, !=, ===


/*Example 2
const temperature = 18;
if (temperature > 20 ){
    console.log("The temperature is less than 20");
}else{
    console.log("The temperature is greater than 20");   
} */

/* Example 3
const score = 200
if(score > 100) {
    let power = "fly"
    console.log(`User power: ${power} `);
}
console.log(`User power: ${power} `);
*/

const balance = 500;
/*  not recommeded and not a good practice
// if (balance == 500) console.log("Test"), console.log("Test 2");
*/

/* Example 4
if (balance < 400) {
    console.log("Less than 500");
} else if (balance == 500 ){
    console.log("balance is equal to 500");
}else if( balance > 800 ){
    console.log("balance is greater than 500");    
}
*/

/*Example 5  */
const userLoggedIn = false
const debitCard = true

// All the condition should be true in And(&&) case
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow user to buy course");
}

// Anyone is true in Or(||) case
if (userLoggedIn || debitCard) {
    console.log("Or allow user to buy course");
}

