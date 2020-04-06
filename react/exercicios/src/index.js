import React from 'react'
import ReactDom from 'react-dom'
//import BomDia from './componentes/BomDia'
//import {BoaTarde, BoaNoite} from './componentes/Multiplos'
import Pai from './componentes/Pai'

ReactDom.render(<div>
    <Pai nome="José" sobrenome="Roberto" />
</div>, document.getElementById('root2'))