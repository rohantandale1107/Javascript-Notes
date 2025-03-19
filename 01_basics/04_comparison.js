//=> true or false
console.log(2 > 1); 
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);

//

console.log("2" > 1);
console.log( 1 > "2"); //string converts for comparison

//
console.log(null>0); //=> false
console.log(null == 0); //=> false
console.log(null <= 0); //=> true
console.log(null >= 0); //=> true

console.log(undefined >= 0); //=> false
console.log(undefined >= 0); //=> false
console.log(undefined >= 0); //=> false

// avoid this type of writing 
// give priority to clean code
//note: equality check and comparisons are not same

/// ===

console.log("2" === 2); //=> false