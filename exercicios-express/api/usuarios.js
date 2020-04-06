function Salvar(req,res){
    res.send('Usuario > Salvar')
}

function Obter(req, res) {
    res.send('Usuario > Obter')
}

module.exports = {Salvar, Obter}