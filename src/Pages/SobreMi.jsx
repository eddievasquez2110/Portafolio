
import '../Assets/css/pages/SobreMi.css'
import photo from '../Assets/img/EDDI.jpg'
import Barras from '../Components/Barras'
const SobreMi = () => {
   
    return (
            <div className='flex flex-col md:mt-20 relative contenedor_sobremi'>
                <div className='xs:p-2 md:p-0 w-full'>
                    <h3 className='text-indigo-500 text-3xl md:text-4xl'>EDDIE OMAR VASQUEZ ESPINOZA</h3>
                    <h4 className='text-gray-400 pt-4 text-xl'>Bach. Ingeniería de Sistemas y Computación</h4>
                    <div className='w-11/12 h-2 bg-indigo-500 mt-4 overflow rounded-md blur-sm' />
                </div>
                <div className='flex flex-inline w-full relative items-center contenedor_sobremi_descripcion'>
                    <div className='marcoPhoto  '>
                        <img src={photo} className='shadow-2xl shadow-indigo-600/40'/>
                    </div>
                    <div className='text-black-300 text-center  justify-center w-11/12 md:w-2/4 columna_barras'>
                        
                        <div className='contenedor_barras flex flex-col pb-10 w-11/12 h-full justify-center'>
                            <h4 className='xs:pt-10 md:pt-0 text-start text-xs md:text-lg'>HABILIDADES:</h4>
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
                
            </div>
    )
}

export default SobreMi