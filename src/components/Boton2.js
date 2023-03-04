import React,{useState}  from 'react'
import '../css/estilos.css'


const Boton2 = () => {
    const [contador, setContdor] = useState(20)
    
    return (
   <>
   <p className='titulo'>Ejemplo de contador Disminuyendo haz Click en el boton, Contador={contador}</p>

   <button className='btn2' onClick={()=>setContdor(contador-1)}>DISMINUIR</button>
    </>
    )
}

export default Boton2