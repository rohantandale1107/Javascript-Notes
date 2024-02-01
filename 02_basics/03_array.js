const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = [ "batman" , "flash", "superman"]

const allHeros = marvel_heros.concat(dc_heros) // it combine two or more arrays in new array
console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros] // (prefer this) to combine array
console.log(allNewHeros);

//


let numArr = [1,[ 2, [3, 4]], 5, [6, 7], 8, [9, 10]]
let realnumArr = numArr.flat(1) // 1 is depth of array // you can do infinity
// let realnumArr = numArr.flat(Infinity) 
console.log(realnumArr);

// Array.isArray
console.log(Array.isArray([1, 2, 3])) // it checks whther its array or not
console.log(Array.isArray("Rohan")) // it checks whther its array or not

//Array.from
console.log(Array.from("Rohan")) //it convert string into array
console.log(Array.from({name:"rohan"}))
console.log(Array.from([1, 2, 3, 4]))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


