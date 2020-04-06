const obj = {a:1, b:2, c:3, soma(){return a+b+c} }

var Jsonobj = JSON.stringify(obj)

console.log(JSON.parse(Jsonobj))