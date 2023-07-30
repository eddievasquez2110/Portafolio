import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {VscGithub} from "react-icons/vsc"
import {FaHashtag, FaLaravel, FaReact} from "react-icons/fa"
import {BiLogoTailwindCss, BiLogoHtml5, BiLogoCss3, BiLogoJavascript} from "react-icons/bi"
import '../Assets/css/pages/Proyectos.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { datos } from "./ListProyectos"

export function iconos (tag) {
    var icon1 = []
        if (tag == "Laravel") {
            icon1 = <FaLaravel className="w-5 h-5"/>
        }else if (tag == "React"){
            icon1 = <FaReact className="w-5 h-5"/>
        } else if (tag == "JavaScript"){
            icon1 = <BiLogoJavascript className="w-5 h-5"/>
        }else if (tag == "Html5"){
            icon1 = <BiLogoHtml5 className="w-5 h-5"/>
        }else if (tag == "Css3"){
            icon1 = <BiLogoCss3 className="w-5 h-5"/>
        }else if (tag == "TailWindCss"){
            icon1 = <BiLogoTailwindCss className="w-5 h-5"/>
        }
    return icon1
}

const Carrusel = () => {
    const [proyectos, setProyectos] = useState(datos)

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <Carousel className='pt-16 p-4 bg-white' swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        >
            {
                proyectos.map(proy => {
                    const { id, imagen, titulo, tag, etiquetas } = proy;
                    return <div className="flex pb-10 w-11/12 h-full justify-center" key={id}>
                    <Link to={`/proyectos/${id}`} className="flex rounded-lg shadow-lg hover:shadow-indigo-500/100 hover:scale-105 hover:text-indigo-500/100">
                        <div className="w-full relative overflow-hidden rounded shadow-lg text-center h-full w-full">
                            <VscGithub className="icon absolute top-2 left-2 text-black" />
                            <img className="w-full h-80" src={imagen} alt={titulo}  />
                            <div className="px-4 py-4">
                                <div className="font-bold text-xl mb-2">{titulo}</div>
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
                                    etiquetas.map (eti =>  <span className="flex justify-center items-center p-2 text-slate-500 text-sm" key={eti}>
                                        <FaHashtag className="text-gray-400"/> {eti}
                                    </span>)
                                }
                            </div>
                        </div>
                    </Link>
                    </div>  
                })    
            } 
        </Carousel>
    )
}

export default Carrusel