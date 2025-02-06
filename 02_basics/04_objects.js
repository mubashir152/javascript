// const ecomerceUser = new Object()   //Singleton object method

const ecomerceUser = {}
ecomerceUser.id = "1234"
ecomerceUser.name = "Mubashir Ahmad",
ecomerceUser.email = "Mubashir@gmail.com"
ecomerceUser.IsloogedIn = false

// Another object
const regularUser = {
    email: "ali@gmail.com",
    fullName: {
        userName: {
            firstName: "Ali",
            lastName: "Ahmad",
        }
    }
}
// console.log(regularUser.fullName.userName.lastName);

const obj1 = {1: "1" ,2: "2",3: "3"}
const obj2 = {4: "4",5: "5",6: "6"}

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        name: "Alan",
        gmail: "alan@mail.com"
    },
    {
        name: "Alan",
        gmail: "alan@mail.com"
    },
    {
        name: "Alan",
        gmail: "alan@mail.com"
    },
    {
        name: "Alan",
        gmail: "alan@mail.com"
    },
]
users[2].gmail

// console.log(ecomerceUser);
// console.log(Object.keys(ecomerceUser));
// console.log(Object.values(ecomerceUser));
// console.log(Object.entries(ecomerceUser));

// console.log(ecomerceUser.hasOwnProperty('email'));

//++++++++++++++++++++ Destructuring objects++++++++++++++++++
const myCourse = {
    name: "Js",
    duration: "20days",
    courseInstructor: "Hitesh",
}
// myCourse.courseInstructor
const {courseInstructor: instructor} = myCourse
console.log(instructor);

