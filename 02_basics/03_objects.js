// singleton

// object literals


const mySym = Symbol ("key1")


const User= {
    name: "Rohan",
    "full name": "Rohan Tandale",
    [mySym] : "mykey1",             // its syntax for use as symbol
    age : 20,
    location : "Pune",
    email : "rohan@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday"]
}

// to access data

console.log(User.email);
console.log(User["email"]);
console.log(User["full name"]);
console.log(User[mySym]);


User.email = "anu@gmail.com"
// Object.freeze(User)            // it freeze the value of original value, it cant be change 
console.log(User);

User.greeting = function (params) {
    console.log(`Hello User ! ${this["full name"]}`);
}

console.log(User.greeting());
