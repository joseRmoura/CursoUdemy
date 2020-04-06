//Criando da forma literal
/*const obj = {}
console.log(obj)

//Object em JS

const obj2 = new Object
console.log(obj2)

//Funções Construtoras

function Produtos(nome, preco, dessc){
    this.nome = nome

}

//Função Factory

var nome = 'Jose'
var salario = 16800
var faltas = 0
var grauDeLindesa = 'altissimo'
function criarFuncao(nome, salarioBase, faltas, grauLindesa){
    return{
        nome,
        salarioBase,
        faltas,
        grauLindesa
    }
}

const f1 = criarFuncao(nome,salario,faltas,grauDeLindesa)

console.log(f1)*/

let arr1 = ['nome','salario', 'genero', 'faltas', 'estadoCivil']
let arr2 = ['jose', 16800, 'Masculino', 0] 
const obj3 = {}

for(let i in arr1){
    if(arr2[i] == undefined){
        arr2[i] = 'NãoInformado'
        obj3[arr1[i]] = arr2[i]
    }else{
        obj3[arr1[i]] = arr2[i]
    }
}

console.log(obj3)

/*const obj = {nome:'jose'}

console.log(obj)*/
