function tratarErro(erro){
    throw new Error('....')
}

function Iprimir(obj){
    try{
        console.log(obj.name.toUpperCase() + ' !!!')
    } catch (e) {
        var erro = e
        return erro
    }
    finally{
        console.log('final')
    }
}

const obj1={
    nome: 'jose'
}

//Iprimir(obj1)
console.log(Iprimir(obj1))