const myObject = {
    js: "Javascript",
    rb: "Rubby",
    cpp: "C++",
    py: "Python",
    swift: "swift by apply"
}

for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
}


const map = new Map()
map.set("us", "United state of america")
map.set("Pak", "Pakistan")
map.set("In", "India")
map.set("UK", "United Kingdom")

const myArry = ["py", "js", "swift", "rb"]

for (const key in map) {
    console.log(key);
}