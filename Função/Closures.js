//Clouser é um escopo criado quando a função é declarada
//Permite acessar e manipular as variáveis externas a função

//Contexto Léxico em ação(Mesma coia da aula anterior)

const x = 'Global'

function fora() {
    const x = 'Local'
    function exibir() {
        return x
    }
    return exibir
}

const pegarFora = fora()

console.log(pegarFora())