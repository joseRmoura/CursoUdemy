let nome = 'João'

function dizerFrase() {
  nome = 'pedro'
  mostrarNome = () => {
  console.log(`${nome} está correndo para pegar o trem!`)
  }
  mostrarNome()
}
dizerFrase()

/*let func = dizerFrase.bind(global) // João está correndo para pegar o trem!

let pedro = {
  nome: 'Pedro',
  dizerFrase: function() {
    console.log(`${this.nome} está correndo para pegar o trem!!`)
  }
}

pedro.dizerFrase() */
