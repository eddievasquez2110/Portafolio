
import { Link } from 'react-router-dom'
import '../Assets/css/pages/DetalleProyectos.css'
import notFound from '../Assets/img/404.png'
function Page404() {

    return (
      <>
        <div className='banner top-0 h-1/6 w-full' />
        <div className="top-0 h-2/4 w-full bg-black p-14" />
        <div className='flex p-80 pt-16 text-xl text-indigo-600 flex-col'>
          <img src={notFound}></img>
          <Link to='/' className='-mt-7 text-white w-full p-4 text-center rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 hover:bg-gradient-to-r hover:from-indigo-700 hover:to-blue-600'>Regresar a Inicio</Link>
        </div>
      </>
      
    )
  }
  
  export default Page404