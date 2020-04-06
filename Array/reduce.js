const alunos  = [
    {nome:'joao', nota:7.3, bolsista:false},
    {nome:'Maria', nota:9.2, bolsista:false},
    {nome:'Pedro', nota:9.8, bolsista:true},
    {nome:'Ana', nota:8.7, bolsista:true}
]

/*const resultado = alunos.map(e => e.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador + atual
},10)

console.log(resultado)*/

const resultado = alunos.map(a => a.bolsista).reduce(function(result,bolsista){
    console.log(result,bolsista)
    return result || bolsista
})

console.log(resultado)