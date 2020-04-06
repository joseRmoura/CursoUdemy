function tag(partes, ...valores) {
    return partes.concat(valores)
}

const aluno = 'José'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)