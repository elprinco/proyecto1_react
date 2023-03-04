import React,{useState}  from 'react'
import '../css/estilos.css'


const Boton = () => {
    const [contador, setContdor] = useState(0)
    
    return (
   <>
   <p className='titulo'>Ejemplo de contador Aumentando haz Click en el boton, Contador ={contador}</p>

   <button className='btn' onClick={()=>setContdor(contador+1)}>AUMENTAR</button>
    </>
    )
}

export default Boton