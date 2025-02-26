// Global scope: anything that is written outside the function has global scope.
var c = 300
let a =505
if (true){
    //Block scope: anything that is written in a block or pranthesis has block scope
    let a = 10;
    const b = 15 
    var c = 20
    console.log("Inner", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function One () {
    const userName = "Alis"
    function two () {
        const website = 'youtube'
        console.log(userName);
    }
    // console.log(website);
    // two()
}
// One()

if (true) {
    const userName = "Rohan"
    if(userName === "Rohan") {
        const website = " Youtube"
        console.log(userName);
    }
    // console.log(website);
}
// console.log(userName);

// ++++++++++++++++++++ Interesting +++++++++++++++
// Basic function
addOne(5) //can execute
function addOne (n) {
    return n + 1
}

// Expression or function
addTwo(5)  //cannot execute
const addTwo = function (n) {
    return n + 3
}




