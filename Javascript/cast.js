let a = 10n;
console.log(a, typeof a)

let a1 = BigInt(10)
console.log(a1, typeof a1)

console.log(10n + 10n)
console.log(10n * 10n)

console.log(BigInt(10.1)) //error we cannot convert to the number from bigint but wise versa is possible so results in an error

let a2;
console.log(a2, typeof a2)

let num=100;
num=null
console.log(num, typeof num)
console.log(null==undefined)
