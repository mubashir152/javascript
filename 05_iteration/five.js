const coding = ["js", "py", "rb", "java", "C++"]

/* First way 
coding.forEach( function (item) {
    console.log(item);  
})
*/
/* 2nd way
coding.forEach((item) => {
    // console.log(item);
})
*/

/* Third way
function printMe (item){
    console.log(item);
}
coding.forEach(printMe)
*/

// coding.forEach((key, index, arr) => {
//     console.log(key,index,arr);
// })


const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "Js"
    },
    {
        languageName: "Ruby",
        languageFileName: "Rb"
    },
    {
        languageName: "Python",
        languageFileName: "Py"
    },
    {
        languageName: "Swift by apple",
        languageFileName: "Swift"
    },
]

myCoding.forEach((item)=> {
    console.log(item.languageName);
    
})


/* 
The forEach method is used to iterate over an array and execute a callback function on each element.

When to Use forEach?
✔ When you need to perform an action on each element.
✔ When you don’t need to return a new array.

❌ Do NOT use forEach if you need a new array—use .map() instead.
*/