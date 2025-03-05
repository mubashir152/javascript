/*const coding = ["js", "py", "rb", "java", "C++"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item
})
console.log(values); */

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const number = myNum.filter((num) => num > 4)   1st
// const number = myNum.filter((num) => {      2nd way
//     return num > 4
// })

 
// myNum.filter((num) => {      not a way
//     const checknum = num > 4;
//     return checknum
// })


// const newNum = []
// myNum.forEach( (num) => {
//     if(num > 4){
//         newNum.push(num)
//     }
// })
// console.log(newNum);


const book = [
    {
    title: "The Enchanted Forest",
    genre: "Fantasy",
    publishDate: "2024-05-15",
    edition: 2015
  },
    {
    title: "The Enchanted",
    genre: "History",
    publishDate: "2024-05-15",
    edition: 1995
  },
    {
    title: "The Forest",
    genre: "Science",
    publishDate: "2024-05-15",
    edition: 1897
  },
    {
    title: "Enchanted Forest",
    genre: "Non-fiction",
    publishDate: "2024-05-15",
    edition: 2024
  },
    {
    title: "Forest",
    genre: "Fantasy",
    publishDate: "2024-05-15",
    edition: 1976
  },
    {
    title: "Enchanted ",
    genre: "Non-fiction",
    publishDate: "2024-05-15",
    edition: 1989
  },
    {
    title: "The rest",
    genre: "History",
    publishDate: "2024-05-15",
    edition: 2006
  },
    {
    title: "The Enched",
    genre: "Fiction",
    publishDate: "2024-05-15",
    edition: 1989
  },
    {
    title: "Hunted Forest",
    genre: "History",
    publishDate: "2024-05-15",
    edition: 2000
  },
]


let UserBooks = book.filter((bk) => bk.genre === "History" )
 UserBooks = book.filter( (bk) => bk.edition > 2000)
UserBooks = book.filter( (bk) => {
     return bk.publishDate === '2024-05-15' && bk.genre === 'History'

    })
console.log(UserBooks);


