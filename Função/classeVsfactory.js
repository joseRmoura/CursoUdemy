/*class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    fala(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('jose')

p1.fala()*/

function Pessoa(nome) {
    this.nome = nome
    this.fala = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('jose')

p1.fala()



