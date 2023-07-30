import '../Assets/css/Footer.css'
import {VscGithub} from "react-icons/vsc"
import {BsLinkedin} from "react-icons/bs"
import { Link } from 'react-router-dom'
import logo from '../Assets/img/logo_Edd.png'

function Footer() {

  return (
    <footer className='contenedor_footer'>
      <div className='contenedor_redes'>
        
          <Link to='https://github.com/eddievasquez2110' target="_blank" className='inline-flex text-center items-center leading-5 text-white hover:font-medium hover:scale-110 focus:outline-none focus:font-medium transition duration-150 ease-in-out'>
            <VscGithub className="icon" />
          </Link>
          <Link to='https://www.linkedin.com/in/eddie-omar-vasquez-espinoza-041a45233' target="_blank" className='inline-flex text-center items-center leading-5 text-white hover:font-medium hover:scale-110 focus:outline-none focus:font-medium transition duration-150 ease-in-out'>
            <BsLinkedin className="icon"/>
          </Link>
        
      </div>
      <div className='autor'>
      @2023 - PORTAFOLIO EDD
      </div>
      <div className='logo'>
        <img src={logo} /> 
      </div>
      
    </footer>
  )
}

export default Footer