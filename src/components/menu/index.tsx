import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './menu.css'
import { Button } from '../button/index'
import { Link } from 'react-router-dom'

const Menu: React.FC = () => {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt='aluraFlix logo' />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu 