let dom = document;
console.log(dom)

console.log(dom.head)
console.log(dom.body)
console.log(dom.URL)
console.log(dom.title="mydpt")

//getelementbyid

let id = document.getElementById('btn')
console.log(id);
id.style.background = "blue";

//getelementbyclassname

let cls = document.getElementsByClassName('test')
console.log(cls)
console.log(Array.isArray(cls))
let a = Array.from(cls)
console.log(Array.isArray(a))


cls[0].style.background="yellow"
cls[1].style.background="green"

let tagName = document.getElementsByTagName('aside')
console.log(tagName);
console.log(Array.isArray(tagName))
let b = Array.from(tagName)
console.log(b);

console.log(Array.isArray(b))

tagName[0].style.textAlign="center"
tagName[0].style.background="biege"