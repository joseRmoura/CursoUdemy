const pessoas = ['jose','maria','flavia','aleshandra']

/*pessoas.forEach((nome,indice) => {
    console.log(`${indice + 1}) ${nome} `)    
});*/

function getArrayPessoas(nomeArray){
    for(let i in nomeArray){
        console.log(`${i}) ${nomeArray[i]}`)
    }
}

getArrayPessoas(pessoas)