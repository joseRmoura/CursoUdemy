//Aula01
/*const ferrai = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo:'V40',
    velMax: 200
}

console.log(ferrai.__proto__)
console.log(ferrai.__proto__ === Object.prototype)*/

//Aula02

/*Object.prototype.attr4 = 'Z'
const pai = {attr1:'A'}
const filho = {__proto__:pai, attr2:'B'}
const neto = {__proto__:filho, attr3: 'C'}
console.log(neto.attr4)*/

/*const carro = {
    velAtual: 0,
    velMax: 240,
    acelerar(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrai = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo:'V40',
    status(){
        return `${this.modelo}:${super.status()}`
    }
}

Object.setPrototypeOf(ferrai, carro)
Object.setPrototypeOf(volvo, carro)
ferrai.acelerar(105)
console.log(ferrai.status())
volvo.acelerar(130)
console.log(volvo.status())*/

/*const pai = {nome: 'José', corCabelo: 'Preto'}

const filha = Object.create(pai)
console.log(filha.corCabelo)

const filha1 = Object.create(pai, {
    nome: {value: 'Bia', writable:false, enumerable:true}
})

console.log(filha1.corCabelo)
filha1.nome = 'Carla'
console.log(filha1.nome)

for(let key in filha1){
    filha1.hasOwnProperty(key)?
        console.log(key) : console.log(`Por herança: ${key}`)
}*/

/*function meuObjeto() {}
console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(meuObjeto.prototype === obj1.__proto__)

meuObjeto.prototype.nome = 'jose'
meuObjeto.prototype.falar = function(){
    console.log(`Bom dia, meu nome é: ${this.nome}`)
}
obj1.nome = 'Jose'
console.log(obj1.nome)
obj1.falar()*/

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('José Roberto'.reverse())

Array.prototype.first = function() {
    return this[0]
}

var arr1 = [1, 2, 3]
console.log(arr1.first())

function firstPos(arr) {
    return arr[0]
}

console.log(firstPos(arr1))