// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("This is number 5");
//     }
//     console.log(element);
// }


/*
for (let i = 0; i < 10; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        const element = j;
        // console.log(`Inner loop value ${i} and outer loop value ${j}`);
        console.log(`${i} * ${j} = ${i*j}`);  
    }; 
} */

/*
const myArray = ["Flash", "Batman", "Spiderman", "Hulk"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
} */

for (let index = 1; index < 20; index++) {
    if (index == 5){
        console.log(`detected ${index}`);
        // break
        continue
    }
    console.log(index);
    
    
}