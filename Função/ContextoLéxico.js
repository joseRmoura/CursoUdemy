const valor = 'Global'

function exibir(){
    console.log(valor)
}

function exibirValor(){
    const valor = 'Léxico'
    exibir()
}

exibirValor()