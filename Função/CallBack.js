/*const fabricantes = ['Mercesdes', 'Audi', 'BMW']

function Imprimir(nome, indice){
    console.log(`${indice + 1}.${nome}`)
}

fabricantes.forEach(Imprimir)*/

const notas = [7.7,6.5,8,9,2.3,4,5,10,3.2]

NotasBaixas = notas.filter(notas => notas<7)

console.log(NotasBaixas)

let notasruins = []

function Notasmenores(notas){
    for(let i in notas){
        if(notas[i]<7){
            notasruins.push(notas[i])
        }
    }
    console.log(notasruins)
}

Notasmenores(notas)