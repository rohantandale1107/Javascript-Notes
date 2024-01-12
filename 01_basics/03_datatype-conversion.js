let score="33"

console.log(typeof score); //=> string


let value= Number (score)
console.log(typeof value); //=> number
 
console.log(value); // => 33

// "33"=> 33
// "33abc"=> NaN(not a value)
// true=1, false=0
// null => 0
//undefined=> undefined

let isLoggedin=1

let BoolisLoggedin= Boolean (isLoggedin);
console.log(BoolisLoggedin);

//1=> true  0=> false
// ""=> false    (empty string)
//"rohan"=> true

let Num= 33
let stringNum= String(Num)
console.log(stringNum);
console.log(typeof stringNum); 

//operations

//converting into neg value
let value1=3
let negValue =-value1
console.log(negValue);

//strings

let str1="rohan"
let str2=" tandale"
let str3= str1 + str2
console.log(str3);

//strings complex

console.log(1+"2"); //=> 12
console.log("1" +2);//=>12
console.log("1"+2+2); //=> 122
console.log(1+2+"2"); //=> 32

let gameCounter= 100
++gameCounter
console.log(gameCounter); // will increment =>101
