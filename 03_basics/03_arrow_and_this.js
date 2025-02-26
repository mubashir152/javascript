const user = {
    userName: "Anil",
    price: 30000,

    welcomeMessage: function() {
        console.log(`${this.userName}, welcome to my website`);
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.userName = "Sam"
// user.welcomeMessage()

// console.log(this);

/* function checkThis () {
    const name = "Bilal"
    console.log(this.name); //undefined
}
checkThis() */

// +++++++++++++ Arrow function ++++++++++++

// const checkThis = () => {
//     const name = "Bilal"
//     console.log(this); //undefined
// }
// checkThis()

// Implicit Return
// const addTwo = (n1, n2) => n1 + n2
// const addTwo = (n1, n2) => (n1 + n2)
const addTwo = (n1, n2) => ({ name: "Ali" })
console.log(addTwo());

// Explicit return in which we have to write return keyword.
