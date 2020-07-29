import React from 'react'
import { Link } from 'react-router-dom'
import { PageDefault } from '../../../pageDefault'

const CadastroCategoria: React.FC = () => {
    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>

            <Link to="/">
                Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria