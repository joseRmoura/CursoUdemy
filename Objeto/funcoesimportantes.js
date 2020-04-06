/*const pessoa = {
    nome : 'José',
    idade: 24,
    peso: 72
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]} : ${element[1]}`)
});*/

// Object assign

/*const obj1 = {a:1}
const obj2 = {b:3}
const o = {c:4, d:5}
const o2 = {a:3}

const objResult = Object.assign(obj1, obj2, o)
console.log(objResult)
Object.freeze(objResult)

const objResult2 = Object.assign(objResult, o2)
console.log(objResult2)*/

const objTeste = {a:3, b:2, c:1}

const objComparacao = {a:2, b:4, c:3}

let arrObjtTeste = Object.keys(objTeste)

let arrObjComparacao = Object.keys(objComparacao)

if(arrObjtTeste.length === arrObjComparacao.length){
    console.log('Sao iguais')
}else{
    console.log('Nao sao iguais')
}

