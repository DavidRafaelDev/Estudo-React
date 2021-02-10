// Componente com parametros
import React from 'react'


export default props =>
    <div>
        {/* Dentro do  {} é interpretado js */}
        <h3>{props.titulo}</h3>
        <p>{props.subtitulo}</p>
        {/* <p>{Array(10).fill(0)}</p> */}
    </div>
