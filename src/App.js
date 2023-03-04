import React from 'react'
import './css/estilos.css'
import Usuarios from './components/Usuarios'
import Footer from './components/Footer'
import Boton from './components/Boton'
import Boton2 from './components/Boton2'

const App = () => {

  const sesion = false;

  return (
    <>
      {sesion ?
        <>
          <Usuarios />
          <Footer />
        </> :
        <>
          <h1 className='titulo'>Debes Iniciar Sesión</h1>
          <Boton/>
          <Boton2/>
          <Footer/>
          </>
        }

        </>
  )
}

      export default App