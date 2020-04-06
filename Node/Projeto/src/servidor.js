const porta = 3003
const db = require('./db')
const teste = require('./teste')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended:true }))

app.get('/produtos', (req, res, next) => {
    res.send(teste.getProdutos()) // Converte para Json
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(teste.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = teste.salvarProdutos({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    res.send(teste.deleteProdutos(req.params.id))
})

app.listen(porta, () => {
    console.log(`Servidor execuando na porta ${porta}.`)
})