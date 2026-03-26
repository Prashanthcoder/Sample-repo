let strName1 = "abc";
console.log(strName1.charAt(0));
console.log(strName1.split('').reverse().join(''))

let testReplace = "good morning"
console.log(testReplace.replace('good', 'bad'))

let testReplaceAll = "best wishes for the best bitch"
console.log(testReplaceAll.replaceAll('best', 'baddie'))

let mobile = "9955783145"
console.log(mobile.padStart(mobile.length + 3, '+91'))

let sal = "45000"
console.log(sal.padEnd(sal.length + 2, '0'))

console.log("abc".startsWith('a'))
console.log("abc".endsWith('c'))

//boolean

console.log(Boolean(""))
console.log(Boolean(0))
console.log(Boolean(false))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))

//true values

console.log(Boolean(true))
console.log(Boolean(23))
console.log(Boolean(-23))
console.log(Boolean("hi"))
console.log(Boolean("-hi"))

//comparison

console.log(2 == 3)
console.log(2 == "2")

//triple

console.log(2 === 2)
console.log(2 === '2')

console.log(10 > 2)
console.log(3 > 5)
console.log(!true)
console.log(true)

if (1) {
    console.log("it won't work at all")
}
if (0) {
    console.log("igt wont work at all")
}