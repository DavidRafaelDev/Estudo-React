import React from 'react'

import produtos from './componets/produto'
export default props => {

    function getProdutos() {
        return produtos.map(prod => {
            return <li>{prod.id} - {prod.name} - R$ {prod.price}</li>
        })
    }

    return (
        <div>
            <h2>Repeticao</h2>
            <ul>
                {getProdutos}
            </ul>
        </div>
    )

}