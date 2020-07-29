import React from 'react'
import { Footer } from '../footer'
import { Main } from './style'
import Menu from '../menu'

export const PageDefault: React.FC = ({ children }) => {

    return (
        <>
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    )
}