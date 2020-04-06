const pessoa = {
    nome:'Ana',
    idade:5,
    endereco:{
        logradouro:'Rua ABC',
        numero:1000
    }
}

const {nome = 'Na', idade} = pessoa
console.log(nome, idade)

const{nome: n,idade: i } = pessoa
console.log(n,i)

const{sobrenome, bemhumorada = 'Na'} = pessoa
console.log(sobrenome,bemhumorada)

const{endereco: {logradouro='Na',numero='Na',cep='Na'}} = pessoa
console.log(logradouro,numero,cep)