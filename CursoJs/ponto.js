console.log(Math.floor(6.7))

const obj1={}

obj1.nome='bola'
obj1['nome'] = 'bola2'
console.log(obj1.nome)

function obj(nome,num1,num2){
    this.nome1=nome
    this.soma=num1+num2
}
const obj2 = new obj('Cadeira',1,2)
const obj3 = new obj('Mesa',3,4)

console.log(obj2.nome1+obj2.soma)
console.log(obj3.soma)