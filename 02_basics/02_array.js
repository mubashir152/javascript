const marvel_heroes = ["Superman", "Thor", "IronMan"]
const dc_heroes = ["Batman", "Flash", "Spiderman"]

// marvel_heroes.push(dc_heroes) // output [ 'Superman', 'Thor', 'IronMan', [ 'Batman', 'Flash', 'Spiderman' ] ]
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]); These are not the good way to merge the array.

const newarry = marvel_heroes.concat(dc_heroes) //The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// console.log(newarry);

// Spread Method (Also use for merge array)
const AllHeroes = [...marvel_heroes, ...dc_heroes]
// console.log(AllHeroes);

// ++++++++++++++++ Flat method ++++++++++++++++++
const newOne = [1,2,3,["Ali", "Abdullah", "Mubashir",[4,5,6]],["Ahmad", "Saim", "Ansar"]]
// console.log(newOne.flat(Infinity));

// console.log(Array.isArray("Mubashir"));
// console.log(Array.from("Mubashir"));
// console.log(Array.from({name: "mubashir"})); //Interesting give us emtpy array because it cant form it.

let Score1 = 100
let Score2 = 400
let Score3 = 700
// console.log(Array.of(Score1, Score2, Score3)); //convert it into an array
