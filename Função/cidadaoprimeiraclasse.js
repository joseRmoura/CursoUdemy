// criar função de forma litera significa criar uma função utilizando function
function fun(){}
// Armazenar função em uma variavel(forma não literal)
const fun2 = function(a,b){return a + b}
// Armazenar em um array
const array = [fun2,fun]

console.log(array[0](2,3))