function nome(nome,idade){
    var cadastroNome = []
    var cadastroIdade = []
    this.nomeCadastro = function(nome) {
           var colocarNome = cadastroNome.push(nome)
    }
    this.idadeCadastro = function(idade) {
        var colocarIdade = cadastroIdade.push(idade)
    }
    this.MostrarcadastroNome = function() {
        return cadastroNome
    }   
    this.mostrarCadastroIdade = function() {
        return cadastroIdade
    }
}

const cad = new nome()
cad.nomeCadastro('jose')
cad.idadeCadastro(18)
cad.nomeCadastro('roberto')
cad.idadeCadastro(24)
cad.nomeCadastro('joao')
cad.idadeCadastro(16)
console.log(cad.MostrarcadastroNome(),cad.mostrarCadastroIdade())