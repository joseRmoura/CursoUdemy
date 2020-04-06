import React, { Fragment} from 'react'

export default props =>
    <Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h2> Verificamos em nosso sistema que sua idade é {props.idade} anos.</h2>
    </Fragment>
