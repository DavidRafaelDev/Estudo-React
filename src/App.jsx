import React from 'react'
import './App.css'
import Primeiro from'./componets/Primeiro'
import ComParametro from './componets/ComParametro'
import ComFilhos from './componets/ComFilhos'

import Card from './componets/layout/Card'

import Repeticao from './Repeticao'


export default props => 
    <div className="App">

            <Repeticao />
    </div>

        // <div className="App">        
        // <Card titulo="Treco preto">
        //     <Primeiro />
        // </Card>

        // <Card titulo="Something black again">
        //     Something white again
        

        // <Primeiro></Primeiro>
        // <ComParametro titulo="Essa que é as ideia"
        //     subtitulo="Irraa" />
        //     posso chamar mais um vez um componente 
        // <ComParametro titulo="show de"
        //     subtitulo="bola" /> 

        // <ComFilhos>
        //     <ul>
        //         <li>Ana</li>
        //         <li>mariana</li>
        //         <li>banana</li>

        //     </ul>
        // </ComFilhos>
        // </Card>
        // </div>
