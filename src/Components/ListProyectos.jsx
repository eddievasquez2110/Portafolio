import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {VscGithub} from "react-icons/vsc"
import {FaHashtag} from "react-icons/fa"
import '../Assets/css/pages/Proyectos.css'
import 'react-multi-carousel/lib/styles.css';
import { iconos } from "./Carrusel"
import challenge from '../Assets/img/proyectos/challenge_encryptor.jpg'
import org from '../Assets/img/proyectos/org.jpg'
import system_et from '../Assets/img/proyectos/system_et.jpg'

export const datos = [
    {
        "id": 1,
        "imagen": challenge,
        "titulo": "Challenge Encriptador",
        "descripcion": "Encriptador y desencriptador de texto, reto organizado por Alura Latam",
        "demo": "https://eddievasquez2110.github.io/challenge_encriptador/",
        "link": "https://github.com/eddievasquez2110/challenge_encriptador",
        "tag": [
            "Html5",
            "Css3",
            "JavaScript"
        ],
        "etiquetas" : [
            "Dev",
            "Challenge",
            "Encryptor"
        ]
    },
    {
        "id": 2,
        "imagen": org,
        "titulo": "Pagina Web ORG",
        "descripcion": "pagina web donde se puede agregar colaboradores, dar like y personalizar color de fondo de cards",
        "demo": "https://org-neon-beta.vercel.app/",
        "link": "https://github.com/eddievasquez2110/org",
        "tag": [
            "React",
            "Html5",
            "Css3"
        ],
        "etiquetas" : [
            "Dev",
            "Front End",
            "api"
        ]
    },
    {
        "id": 3,
        "imagen": system_et,
        "titulo": "Sistema de Especificaciones Tecnicas",
        "descripcion": "Sistema realizado en equipo como practicas en la UNCP",
        "demo": "https://github.com/eddievasquez2110/system_et",
        "link": "https://github.com/eddievasquez2110/system_et",
        "tag": [
            "Laravel",
            "React",
            "Html5",
            "TailWindCss"
        ],
        "etiquetas" : [
            "Dev",
            "SCRUM",
            "FullStack",
            "api",
            "Trabajo en equipo"
        ]
    },
    {
        "id": 4,
        "imagen": system_et,
        "titulo": "Sistema de Especificaciones Tecnicas",
        "descripcion": "Sistema realizado en equipo como practicas en la UNCP",
        "demo": "https://github.com/eddievasquez2110/system_et",
        "link": "https://github.com/eddievasquez2110/system_et",
        "tag": [
            "Laravel",
            "React",
            "Html5",
            "TailWindCss"
        ],
        "etiquetas" : [
            "Dev",
            "SCRUM",
            "FullStack",
            "api",
            "Trabajo en equipo"
        ]
    }
]

const ListProyectos = () => {
    
    const [proyectos, setProyectos] = useState(datos)
    
    return (
        <>
            <div className='banner top-0 h-1/6 w-full' />
            <div className="top-0 h-2/4 w-full bg-transparent p-14" />
            <div className="contenido_proyect flex flex-wrap p-10 justify-evenly">
            {
                proyectos.map(proy => {
                    const { id, imagen, titulo, descripcion, tag, etiquetas } = proy;
                    return <div className="flex pb-10 2-full md:w-3/6 pt-5 md:p-10" key={id}>
                    <Link to={`/proyectos/${id}`} className="flex w-full rounded-lg shadow-lg hover:shadow-indigo-500/100 hover:scale-105 hover:text-indigo-500/100">
                        <div className=" relative overflow-hidden rounded overflow-hidden shadow-lg text-center h-full w-full">
                            <VscGithub className="icon absolute top-2 left-2 text-black" />
                            <img className="w-full h-80" src={imagen} alt={titulo} />
                            <div className="px-4 py-4">
                                <div className="font-bold text-xl mb-2">{titulo}</div>
                            </div>
                            <div className="p-5 text-slate-500">
                                <p>{descripcion}</p>
                            </div>
                            <div className="flex flex-wrap pt-5 pb-2 justify-center">
                                {
                                    tag.map (nombreTag => {
                                        return (
                                        <span className="inline-flex gap-2 justify-center bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={nombreTag} id="i">
                                            {iconos(nombreTag)}
                                            {nombreTag}
                                        </span> )})
                                }
                            </div>
                            <div className="flex flex-wrap pt-5 pb-6 justify-center">
                                {
                                    etiquetas.map (eti =>  <span className="flex justify-center items-center p-2 text-slate-500" key={eti}>
                                        <FaHashtag className="text-gray-400"/> {eti}
                                    </span>)
                                }
                            </div>
                        </div>
                    </Link>
                    </div>  
                })    
            } 
        </div>
        </>
    )
}

export default ListProyectos