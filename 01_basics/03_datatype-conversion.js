let score="33"
let score1= "33abc"

console.log(typeof score);  // => String
console.log(typeof(score));  // => String

let valueInNumber = Number(score)
let valueInNumber1= Number(score1)

console.log(typeof valueInNumber); //  => Number
console.log(valueInNumber1); //=>  NaN


// "33"=> 33
// "33abc"=> NaN(not a value)
// true=1, false=0
// null => 0
//undefined=> undefined

let isLoggedin = 1;

let booleanIsLoggedIn= Boolean(isLoggedin)
console.log(booleanIsLoggedIn); //=> true

//1=> true  0=> false
// ""=> false    (empty string)
//"rohan"=> true

let num =33

let stringNum= String(num)
console.log(stringNum); //=> 33
console.log(typeof stringNum); //=> String

// ********************* Operations ****************************


// converting negative value
let value = 3
let negValue= -value
console.log(negValue); //=> -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


//  strings

let str1 = "hello"
let str2= " rohan"

let str3= str1+str2;
console.log(str3);  //=>  hello rohan

console.log("1"+2);
console.log(1+"2");

//strings complex

console.log(1+"2"); //=> 12
console.log("1" +2);//=>12
console.log("1"+2+2); //=> 122
console.log(1+2+"2"); //=> 32


// Increment

let gameCounter= 100
++gameCounter
console.log(gameCounter); // will increment =>101