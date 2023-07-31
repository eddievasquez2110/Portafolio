import '../Assets/css/pages/Contacto.css'
import {FaPhoneAlt} from "react-icons/fa"
import {FaMapMarkerAlt} from "react-icons/fa"
import {BiLogoGmail} from "react-icons/bi"
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Contactos = () => {

    let [nombre, setNombre] = useState("")
    
    return (
        <section id="contactos" className='pt-16 pb-16'>
            <div className="relative flex items-top justify-center min-h-full bg-white sm:items-center sm:pt-0">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="mt-8 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                                <h1 className="text-4xl sm:text-5xl text-gray-800 font-extrabold tracking-tight">
                                    Ponerse en Contacto
                                </h1>
                                <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 mt-2">
                                    Rellena el formulario para iniciar una conversación
                                </p>

                                <div className="flex items-center mt-8 text-gray-600">
                                    <FaMapMarkerAlt />
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        Huancayo, Junin
                                    </div>
                                </div>

                                <div className="flex items-center mt-4 text-gray-600">
                                    <FaPhoneAlt />
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        +51 925271546
                                    </div>
                                </div>

                                <div className="flex items-center mt-2 text-gray-600">
                                    <BiLogoGmail />
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        eddieomarvasquez@gmail.com
                                    </div>
                                </div>
                            </div>

                            <form className="p-6 flex flex-col justify-center">
                                <div className="flex flex-col">
                                    <label className="hidden">Nombre Completo</label>
                                    <input type="name" onChange={(event) => setNombre(event.target.value)} name="name" id="name" placeholder="Nombre" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label className="hidden">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label className="hidden">Numero de Celular</label>
                                    <input type="tel" name="tel" id="tel" placeholder="N° Celular" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                                </div>
                                <Link to={`https://wa.me/51925271546?text=Hola,%20soy%20${nombre},%20vengo%20de%20la%20p%C3%A1gina%20web%20de%20su%20portafolio%20cuentame%20mas%20sobre%20ti,%20por%20favor.`} target='_blank' className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-10 hover:bg-indigo-500 transition ease-in-out duration-300" >
                                    Contactar
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contactos