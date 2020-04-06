const Produto = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

/*console.log(Produto.filter(function(p) {
    if(p.preco > 500 && p.fragil == true){
        return p
    }
}))*/

const prodCaro = p => p.preco > 500
const prodFragil = p => p.fragil = true

console.log(Produto.filter(prodCaro).filter(prodFragil))