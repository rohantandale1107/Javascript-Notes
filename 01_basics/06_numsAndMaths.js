const score= 100
console.log(score);

const balance= new Number(200)
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2)); // 200 => 200.00

const otherNum= 123.8945

console.log(otherNum.toPrecision(4)); // 123.8945=> 123.9

const hundreds= 1000000
console.log(hundreds.toLocaleString()); // add comma is value => 10,00,000


// +++++++++++++++++ Maths ++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // it converts "-4" values in positive => "+4"
console.log(Math.round(3.6)); // round off 4
console.log(Math.floor(4.9));
console.log(Math.ceil(3.4));

console.log(Math.min(3, 5, 6, 9, 2));  // min value in array => 2
console.log(Math.max(3, 5, 6, 9, 2));  // max value in array => 9
console.log((Math.random()*10)+1);  //gives random value between 0 to 1

const min= 10
const max =20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // now it gives the random value between 10 - 20