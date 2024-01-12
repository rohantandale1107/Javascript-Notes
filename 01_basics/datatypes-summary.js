// Primitive

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValur = 100.3

const isLoggedIn = false
const Temp = null
let userEmail;

const id = Symbol ('123')
const anotherID = Symbol('123')

console.log(id==anotherID);

const bigNumber = 696969696969696969696969n

// Reference Types (Non Primitive)

// Arrays, Objects, Functions

const heros= ["shaktiman", "spiderman", "ironman"]
let myObj = {
    name:"rohan",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof id);

// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object