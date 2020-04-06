console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('ana', 'jose', 'carlos')
console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[3])
aprovados[3] = 'Julia'
aprovados.push('Marcela')
console.log(aprovados.length)

aprovados[9] = 'geovana'
console.log(aprovados.length)

console.log(aprovados[8] === undefined)

console.log(aprovados)

aprovados.sort()

console.log(aprovados)