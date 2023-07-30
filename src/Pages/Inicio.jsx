import React from 'react'
import 'react-multi-carousel/lib/styles.css'
import '../Assets/css/pages/Inicio.css'
import cohete from '../Assets/img/cohete.png'
import message from '../Assets/img/message.jpg'
import titulo from '../Assets/img/banni.png'
import Button from '../Components/Button'
import SobreMi from './SobreMi'
import Contactos from './Contacto'
import Carrusel from '../Components/Carrusel'
import {VscGithub} from "react-icons/vsc"
import {BsLinkedin} from "react-icons/bs"
import { Link } from 'react-router-dom'

function Inicio() {

  return (
    <main>
      <div className='banner' />
      <div className='contenedor_inicio'>
        <div className='contenedor_banner flex flex-col'>
          <img src={cohete} className='cohete' />
          <div className='person overflow-hidden bottom-40 left-40'>
            <img src={message}/>
          </div>
          <h3 className='texto_auto mt-10'>Hola soy EDDIE, contacteme por : </h3>
          <div className='icons flex gap-10 mt-10'>
            <Link to='https://github.com/eddievasquez2110' target="_blank" className='inline-flex text-center items-center leading-5 text-white hover:font-medium hover:scale-110 focus:outline-none focus:font-medium transition duration-150 ease-in-out'>
              <VscGithub className='icon' />
            </Link>
            <Link to='https://www.linkedin.com/in/eddie-omar-vasquez-espinoza-041a45233' target="_blank" className='inline-flex text-center items-center leading-5 text-white hover:font-medium hover:scale-110 focus:outline-none focus:font-medium transition duration-150 ease-in-out'>
              <BsLinkedin className='icon'/>
            </Link>
          </div>
        </div>
        <div className='contenedor_titulo'>
          <h1 className='text text-2'>FRONT END JR</h1>
          <p className='p-10'>Me concentro en el diseño y desarrollo de páginas o aplicativos,
          actualmente me caracterizo por ser programador junior FRONT END</p>
          <div className='contenedor_button'>
              <Button color='primario' href='#proyectos'>Empezar recorrido</Button>
          </div>
        </div>
      </div>

      <section id="sobreMi">
            <div className='contenedor_banner__titulo pt-10'>
                <div className='flex flex-inline relative justify-center contenedor_nube'>
                    <div className='titulo blur-xl absolute'/>
                    <h2 className='flex z-2 pt-5 relative text-white justify-center text-center '>MAS SOBRE MI</h2>
                    <img src={titulo} className='absolute flex top-0 z-0 w-full pt-5 '/>
                </div>
                <SobreMi />
            </div>
      </section>

      <section id="proyectos">
            <div className='contenedor_banner__proyectos'>
            <div className='flex flex-inline relative justify-center'>
                    <div className='titulo blur-xl absolute'/>
                    <h2 className='flex z-2 pt-5 pb-8 relative text-white justify-center text-center '>PROYECTOS</h2>
                </div>
                <Carrusel />
            </div>
      </section>

      <Contactos />
    </main>
  )
}

export default Inicio