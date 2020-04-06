const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended:true} ))

app.post('/usuarios', (req, res) => {
    let senha = req.body
    console.log(senha) 
    res.send('<h1>' +  `${senha}` + '</h1>')
})
app.listen(3003)