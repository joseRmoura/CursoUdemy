const sequencia = {
    _id:1,
    get seq(){ return this._id++ }
}

const produtos = {}

function salvarProdutos(produto){
    produtos[sequencia.seq] = produto
    return produto
}

function getProduto(id) {
   return produtos[id]
}

function getProdutos(){
    return Object.values(produtos)
}

function deleteProdutos(id){
    delete produtos[id]
    return produtos[id]
}

module.exports = {salvarProdutos, getProduto, getProdutos, deleteProdutos}