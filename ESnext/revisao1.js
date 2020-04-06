//let e const
{
    var a = 2
    let b = 3
}

console.log(a)
//console.log(b) // vai dar problema pq o let não pode se visualizado fora de um bloco se declarado dentro.

//template string
const produto = 'Ipad'
console.log(`${produto} é caro!`)

//Destructuring
let nome = 'José roberto'
const [...tras] = nome
let resul = tras.reduce((prim,sec) => prim + sec)
console.log(resul)

