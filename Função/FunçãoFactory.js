function criarProduto(nome,preco,desconto=5) {
    let novoValorDesc = (preco - (preco * (desconto/100))).toFixed(2)
    return {
        nome,
        preco,
        desconto,
        novoValor : novoValorDesc
    }
}

console.log(criarProduto('chave',28))