function sayMyName () {
    console.log('A');
    console.log('L');
    console.log('I');    
}
// sayMyName();
// function addTwoNum (n1, n2) {
//     console.log(n1 + n2);
// }
// addTwoNum(2,10)
// addTwoNum(2, 'm')
// addTwoNum(2, null)

function addTwoNum (n1, n2) {
    // let result = n1 + n2
    // console.log("Mubashir");
    // return result     //The statement cannot be executed which is written after the return function.
    // Another way
    return n1+ n2
}
const result = addTwoNum(30,10)
// console.log("Result:", result);


function userLogin (username = "Sam") { //if we want to pass a defaut value than
    if (!username){
        console.log("please enter a username");
        return   
    }
    return `${username}, just login`
}
// console.log(userLogin("ALi"));
// console.log(userLogin());  //undefined is the result   

// ++++++++++++++++ Cart ++++++++++++++
function CalculateCartPrice (val1, val2, ...n1) {
    return n1
}
// console.log(CalculateCartPrice(300, 400, 500, 700)); //output becomes [500, 700] because first two values assign to first two operands.

const user = {
    username: "Mubashir",
    prices: 300
}
function handleObject (anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
// otherway
// handleObject({
//     username: "Sam",
//     price: 900
// })

const myNewArray = [200, 400, 300, 900]
function returnSecondValue (getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 150, 950, 320]));
