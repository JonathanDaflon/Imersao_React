import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Formulario } from '../../../formulario'
import { PageDefault } from '../../../pageDefault'

interface IValues {
    nome: string
    descricao: string
    cor: string
}

const CadastroCategoria: React.FC = (): JSX.Element => {

    const ValoresIniciais: IValues = {
        nome: 'Insira uma Categoria',
        descricao: 'Descreva sua Categoria',
        cor: '#000'
    }

    const [values, setValues] = useState<IValues>({ nome: '', descricao: '', cor: '' })
    const [categorias, setCategorias] = useState<IValues[]>([])

    const setCategoria: Function = (value: IValues): void => {
        setCategorias([
            ...categorias,
            value
        ])
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const name: string = event.target.getAttribute('name') || ''
        const value: string = event.target.value

        setValues({
            ...values,
            [name]: value
        })
    }

    const isDisabled = (values: IValues) => {
        if (!values.nome || !values.descricao || !values.cor){
            return true
        }
    }

    return (
        <PageDefault>

            <Link to="/">
                Ir para a Home
            </Link>

            <form onSubmit={(event) => {
                event.preventDefault()
                setCategoria({
                    nome: values.nome,
                    descricao: values.descricao,
                    cor: values.cor
                })

                setValues({
                    nome: '',
                    descricao: '',
                    cor: ''
                })
            }}>

                <Formulario
                    label="Nome da Categoria"
                    name="nome"
                    onChange={changeHandler}
                    value={values.nome}
                    type="text"
                    placeholder={ValoresIniciais.nome}
                />

                <Formulario
                    label="Descrição da Categoria"
                    name="descricao"
                    onChange={changeHandler}
                    value={values.descricao}
                    type="text"
                    placeholder={ValoresIniciais.descricao}
                />

                <Formulario
                    label="Cor da Categoria"
                    name="cor"
                    onChange={changeHandler}
                    value={values.cor}
                    type="color"
                    placeholder={ValoresIniciais.cor}
                />

                <button type="submit" disabled={isDisabled(values)}>
                    Cadastrar
                </button>

            </form>

            <ul>
                {categorias.map((categoria: IValues, indice: number) => {
                    return (
                        <li key={`${categoria.nome}${indice}`}>
                            {categoria.nome} | {categoria.descricao} | {categoria.cor}
                        </li>
                    )
                })}
            </ul>

        </PageDefault>
    )
}

export default CadastroCategoria