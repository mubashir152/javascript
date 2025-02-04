let name = "Mubashir"
const count = 40

// console.log(name + count + " Ahmad");     not recommended / outdated
// console.log(name.concat(' - ', count));

const str1 = "Cats are the best"
console.log(str1.endsWith('are'));
// console.log(name.localecompare(str1))

const para = "The quick brown fox jumps over the lazy Dog. It barked."
const para2 = /[A-Z]/g
console.log(para.match(para2));




// console.log(`Hello my name is ${name} and my count is ${count}`);
const gameName = new String('Abdullah')

// console.log(gameName);
// console.log(gameName[3]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('d'));

const newString = gameName.substring(1,5)
// console.log(newString);

const anotherString = gameName.slice(3, 7)
// console.log(anotherString);

const str = 'The quick brown fox jumps over the lazy dog.';

const SplitString = str.split(" ")
// console.log(SplitString);


const StringTrim = "    Mubashir     "
// console.log(StringTrim);
// console.log(StringTrim.trim());

// console.log(StringTrim.fontsize(20));

const url = "https://google. com"
// console.log(url.replace(" " , "20%"));
// console.log(url.includes("muab"));


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/


