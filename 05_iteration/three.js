// for of

// ["", "", ""]
// {"", "", ""}

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);   
}

const greetings = "Hello world"
for (const greet of greetings) {
    // console.log(`each character is ${greet}`);   
}


// map (has unique value means not repeat a value, display in same order)
const map = new Map()
map.set("us", "United state of america")
map.set("Pak", "Pakistan")
map.set("In", "India")
map.set("UK", "United Kingdom")
// console.log(map);

for (const [key, value] of map) {
    console.log(key, '->', value);
}


/* 
const myObj = {
    game: "Ludo",
    game2: "Cards"
}

for (const [key, value] of myObj) {
    console.log(key, value);
} 
My object is not iterateable in for of without map    
*/