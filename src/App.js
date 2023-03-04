import React from "react";
import './css/estilos.css'

const App = () => {

const saludos = "Curso de React - INTECAP"
const nombre = "Edgar Rafael Choy alvarado"
    
    return(
      <>

      <h1 className="titulo">{saludos}</h1>

    <p className="titulo"> {nombre}</p>
      
      
      
      </>
    )
}

export default App