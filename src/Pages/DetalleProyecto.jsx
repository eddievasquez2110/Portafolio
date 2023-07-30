
import { useParams, useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { BiLogoGithub } from "react-icons/bi"
import { FaPlayCircle } from "react-icons/fa"
import '../Assets/css/pages/DetalleProyectos.css'
import { datos } from "../Components/ListProyectos"

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
                
                <div className="contenedor_detproyectos rounded-lg shadow-lg" key={proy.id}>
                <div className="titulo overflow-hidden bg-black rounded-t-lg">
                    <h2 className="">
                        {proy.titulo}
                    </h2>
                </div>
                <div className="flex flex-row p-10 justify-evenly gap-10">
                    <img className="h-80 w-2/4 shadow-lg shadow-blue-200 rounded-lg" src={proy.imagen} />
                    <div className="flex flex-col w-2/4">
                        <Link to={proy.demo} className="md:w-30 flex items-center justify-center gap-3 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 rounded-lg mt-10 hover:bg-indigo-500 transition ease-in-out duration-300">
                            <FaPlayCircle className="icon1" />Visualizar Demo
                        </Link>
                        <Link to={proy.link} target="_blank" className="md:w-30 flex items-center justify-center gap-3 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 rounded-lg mt-10 hover:bg-indigo-500 transition ease-in-out duration-300">
                            <BiLogoGithub className="icon1" />Visualizar GitHub
                        </Link>
                        <div className="pt-10 text-justify p-4 text-gray-400">
                            <p className="">{proy.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div> : <></>)
        }
        
        </div>
        </>
    )
}

export default DetalleProyecto