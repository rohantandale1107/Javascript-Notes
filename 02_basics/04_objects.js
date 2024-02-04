 const tinderUser = new Object()     // singeltan
//  const tinderuser = {}             //non-singleton

tinderUser.id = "123abc"
tinderUser.name = "rohan"

// console.log(tinderUser);

const regularUser = {
    email : "rohan@gmail.com",
    fullname: {
        userfullname: {
            firstname :"rohan",
            lastname : "tandale"
        }
    }
}

console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = { obj1, obj2}
const obj4 = Object.assign({}, obj1, obj2) 
// first parenthesis position ({}) is target, and other are source that gonna stored in 1st object (1st positioned)


const obj5 = {...obj1,...obj2,}
console.log(obj5);

const users = [
    {
        id: 1,
        email:"rohan@gmail.com"
    },
    {
        id: 1,
        email:"rohan@gmail.com"
    },
    {
        id: 1,
        email:"rohan@gmail.com"
    },
    {
        id: 1,
        email:"rohan@gmail.com"
    },

]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('id'));
//checks whther entites is present or not -> true or false


