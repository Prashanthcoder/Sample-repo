let num = 10;
let num1 = 20 / 2;
let num3 = 30.2;
console.log(num, typeof num);
console.log(num1, typeof num1);
console.log(num3, typeof num3);

console.log(parseInt(10.1));
console.log(parseInt("10.11"));
console.log(parseFloat("10.12a34"));
console.log(parseFloat("a123.457"));

let a = 56.3515;
console.log(a.toFixed(3));
console.log(a.toPrecision(4));
console.log(isNaN(Number("100a")));
console.log(isNaN(Number("100")));
console.log(isFinite(2 / 0));