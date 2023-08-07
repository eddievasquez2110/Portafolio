import { Link } from 'react-router-dom'
import '../Assets/css/Header.css'
import logo from '../Assets/img/logo_Edd.png'
import NavLink from './NavLink'
import {FiMenu} from "react-icons/fi"
import NavLinkResponsive from './NavLinkResponsive'
import Dropdown from './Dropdown'

function Header() {

  return (
    <header>
      <div className='contenedor_header'>
        <Link to={'/'} className='contenedor_logo'>
          <img src={logo} />
          <p>PORTAFOLIO</p>
        </Link>

        <div className='contenedor_menu'>
          <NavLink to='/'>Inicio</NavLink>
          <NavLink to='/proyectos'>Proyectos</NavLink>
          <NavLink to='/#sobreMi' section={true}>Sobre mi</NavLink>
          <NavLink to='/#contactos' section={true}>Contacto</NavLink>
        </div>
        <div className='contenedor_menu__responsivo'>
            <Dropdown>
              <Dropdown.Trigger>
                <FiMenu className='icon cursor-pointer'/>
              </Dropdown.Trigger>
              <Dropdown.Content>
                <NavLinkResponsive to='/'>Inicio</NavLinkResponsive>
                <NavLinkResponsive to='/proyectos'>Proyectos</NavLinkResponsive>
                <NavLinkResponsive to='/#sobreMi' section={true}>Sobre mi</NavLinkResponsive>
                <NavLinkResponsive to='/#contactos' section={true}>Contacto</NavLinkResponsive>
              </Dropdown.Content>
            </Dropdown>
        </div>
      </div>
    </header>
  )
}

export default Header