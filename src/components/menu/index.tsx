import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './menu.css'
import { Button } from '../button/index'

const Menu: React.FC = () => {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt='aluraFlix logo' />
            </a>

            <Button as="a" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu 