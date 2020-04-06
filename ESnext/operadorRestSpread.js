//Rest
const nome = ['José', 'Isadora']

function concatena(arr1, ...arr2) {
    return arr2.concat(arr1).reduce((pos1,pos2) => pos1.concat(pos2))
}

console.log(concatena(['João', 'Maria'], nome))

//Spread

const funcinarios = {nome:'José',salario:12349.99}
const clone = {ativo:true,...funcinarios}

console.log(clone)

//Spread com array

const grupoA = ['Maria', 'João', 'José', 'Isadora']
const grupoFinal = ['Eliete', ...grupoA]
console.log(grupoFinal)