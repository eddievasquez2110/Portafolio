
import { useParams, useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { BiLogoGithub } from "react-icons/bi"
import { FaPlayCircle } from "react-icons/fa"
import '../Assets/css/pages/DetalleProyectos.css'
import { iconos } from "../Components/Carrusel"
import { datos } from "../Components/ListProyectos"
import Button from "../Components/Button"

const DetalleProyecto = () => {

    const [proyectos, setProyectos] = useState(datos)

    const { id } = useParams()

    return (
        <>
        <div className='banner top-0 h-1/6 w-full' />
        <div className="top-0 h-2/4 w-full bg-transparent p-14" />
        <div className="contenedor">
        {
            proyectos.map(proy => proy.id == id ? 
                
                <div className="contenedor_detproyectos rounded-lg shadow-lg " key={proy.id}>
                <div className="overflow-hidden p-5 text-center text-indigo-800 text-4xl font-extrabold tracking-tight uppercase bg-gradient-to-r from-gray-200 to-gray-100 rounded-t-lg mt-10 md:mt-0">
                    <h2 className="text-xl md:text-2xl">
                        {proy.titulo}
                    </h2>
                </div>
                <div className="contendor_detproyectos_items flex flex-col md:flex-row p-5 pt-10 md:p-10 justify-evenly md:gap-10">
                    <div className="">
                        <img className="h-80 w-full shadow-lg shadow-blue-200 rounded-lg xs:pt-5" src={proy.imagen} />
                    </div>
                    
                    <div className="flex flex-col w-full md:w-2/4 mt-6 md:mt-0 justify-around">
                        <div className="flex flex-col gap-5">
                            <Button color="primario" href={proy.demo}>
                                <FaPlayCircle className="icon1" />Visualizar Demo
                            </Button>
                            
                            <Button color="secundario" href={proy.link}>
                            <div className='box'>
                                <h1 className='gradient-text'>
                                    <BiLogoGithub className="icon1 text-yellow-600" />Visualizar GitHub
                                </h1>
                            </div>
                                    
                            </Button>
                            
                        </div>
                        <div className="pt-6 text-justify p-4 text-gray-400">
                            <p className="">{proy.descripcion}</p>
                        </div>
                        <div className="flex flex-wrap w-full justify-center">
                        {
                            proy.tag.map(tagi => {
                            return (
                                <span className="inline-flex gap-2 justify-center bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2" id="i" key={tagi}>      
                                    {iconos(tagi)}
                                    {tagi}
                                </span> 
                            )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div> : <div key={proy.id}></div>)
        }
        
        </div>
        </>
    )
}

export default DetalleProyecto