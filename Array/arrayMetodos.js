const piloto = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
piloto.pop() // retira o ultimo elemento do array
console.log(piloto)
piloto.push('Verstappen')
console.log(piloto)
piloto.shift() // retira o primeiro da lista
console.log(piloto)
piloto.unshift('Hamilton')
console.log(piloto)

// splice pode adicionar e remover componentes de um array
// adicionar
piloto.splice(2,0,'Bottas','Massa')
console.log(piloto)
// remover
piloto.splice(3,1)
console.log(piloto)

const algunsPilotos = piloto.slice(2) // cria novo array
console.log(algunsPilotos)

const algunsPilotos2 = piloto.slice(1,4)
console.log(algunsPilotos2)