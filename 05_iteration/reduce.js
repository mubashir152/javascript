const myNum = [1, 2, 3]

const myTotal = myNum.reduce( (acc, currval) => {
    // console.log(`${acc} and current value is ${currval}`);
    return acc + currval
}, 0)
// console.log(myTotal);


const shoppingCart = [
    {
        course: "Js",
        price: 2999
    },
    {
        course: "Py",
        price: 999
    },
    {
        course: "PhP",
        price: 999
    },
    {
        course: "React",
        price: 3999
    },
    {
        course: "App dev",
        price: 8999
    },
]

const myCart = shoppingCart.reduce( (acc, item) => {
    return acc +item.price
},0)
console.log(myCart);
