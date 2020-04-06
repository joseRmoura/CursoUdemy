import React, { Component } from 'react'

export default class Contador extends Component {
    state = {
        Cont: 0,
        Nome: "",
        NomeResp: ""
    }
    constructor(props) {
        super(props)

        this.showNome = this.showNome.bind(this)
        this.getNome = this.getNome.bind(this)
    }
    showNome(e) {
        var NomeAux = this.state.NomeResp
        this.setState({ Nome: NomeAux })
    }

    getNome(e){
        this.setState({ NomeResp: e.target.value})
    }
    render() {
        const { Nome } = this.state
        return (
            <div>
                <h1>{Nome}</h1>
                <input type="text" placeholder="Digite seu e-mail" onChange={this.getNome}/>
                <button type="submit" onClick={this.showNome} >Enviar</button>
            </div>
        )
    }
}