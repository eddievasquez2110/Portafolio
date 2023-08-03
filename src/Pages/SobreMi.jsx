
import '../Assets/css/pages/SobreMi.css'
import photo from '../Assets/img/edd.png'
import Barras from '../Components/Barras'
const SobreMi = () => {
   
    return (
            <div className='contenedor_sobremi flex flex-inline relative md:mt-20'>
                <div className='marcoPhoto m-10 xs:w-11/12'>
                    <img src={photo} className='shadow-2xl shadow-indigo-600/40'/>
                </div>
                <div className='text-black-300 text-center  justify-center w-11/12 md:w-2/4 columna_barras'>
                    <h3 className='text-indigo-800/80 text-md font-bold text-2xl'>EDDIE OMAR VASQUEZ ESPINOZA</h3>
                    <div className='contenedor_barras flex flex-col pb-10 w-11/12 h-full justify-center'>
                        <h4 className='pt-10 text-start text-xs md:text-lg'>HABILIDADES:</h4>
                        <div className='barras'>
                            <Barras bgcolor="#4F46E5" progress="74" label="HTML" height={22}/>
                            <Barras bgcolor="#4F46E5" progress="72" label="CSS" height={22}/>
                            <Barras bgcolor="#4F46E5" progress="70" label="SQL" height={22}/>
                            <Barras bgcolor="#4F46E5" progress="65" label="Git" height={22}/>
                            <Barras bgcolor="#4F46E5" progress="60" label="JavaScript" height={22}/>
                            <Barras bgcolor="#4F46E5" progress="50" label="React" height={22}/>
                            <Barras bgcolor="#4F46E5" progress="40" label="Java" height={22}/>
                            <Barras bgcolor="#4F46E5" progress="30" label="Laravel" height={22}/>  
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SobreMi