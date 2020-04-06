import React, { Fragment} from 'react'
import Filho from './filho'

export default (props) => 
    <Fragment>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Nomes</h2>
        <Filho {...props}/>
        <Filho {...props} nome="Carla" />
    </Fragment>

