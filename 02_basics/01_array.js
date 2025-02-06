const myarr = [0,1,2,3,4]
const myHeros = ["Ali", "Umar", "Usman"]

// console.log(myarr[2]);
// console.log(myHeros);

// +++++++++++++++++++ Array Method +++++++++++++
// Add elements at the end of the array
myHeros.push("AbuBakar", 1)
// delete elements at the end of the array
myHeros.pop()
// console.log(myHeros);


// Add elements at the start of the array
myarr.unshift(20)
// delete elements at the start of the array
myarr.shift()
// console.log(myarr);

// console.log(myHeros.includes("Ali")); //check whether the value is there or not.
// console.log(myHeros.indexOf("Abubakar")); //if the element is not present in the array then the result is -1.

const newArr = myarr.join() //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// console.log(myarr);
// console.log(typeof myarr);
// console.log(newArr);
// console.log(typeof newArr);

// Slice or splice

console.log("A ", myarr);
/* The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.*/
const myn1 = myarr.slice(1,4)
console.log(myn1);
console.log("B ",myarr);

/*The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place */
const myn2 = myarr.splice(1,4)
console.log(myn2);
console.log("C ", myarr);


// JavaScript array-copy operations create shallow copies.A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too.
