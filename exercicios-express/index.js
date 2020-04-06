const express = require('express')
const saudacao = require('./saudacaumid')
const bodyparser = require('body-parser')
const api = require('./api/usuarios')

const app = express()

app.post('/Usuario/Salvar', api.Salvar)
app.get('/Usuario/Obter', api.Obter)

app.use(express.json())

app.use(saudacao('jose'))


app.get('/clientes/:id', (req,res) => {
    res.send(`Cliente ${req.params.id} selecionado`)
})

app.get('/cliente/relatorios', (req, res) => {
    res.send(`Client relatorio: completo ${req.query.completo} ano ${req.query.ano}`)
})

app.post('/corpo', (req,res) => {
    res.send(JSON.stringify(req.body))
})

app.listen(3000,() => {
    console.log('Executando')
})
