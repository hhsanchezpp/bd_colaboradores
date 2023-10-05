import { useState, useEffect } from 'react'
import Formulario from "./components/Formulario"
import Listado from "./components/Listado"

const App = () =>  {
  const [colaboradores, setColaboradores] = useState([])
  return (
    <div className='container'>
      <Formulario colaboradores={colaboradores} setColaboradores={setColaboradores} />
      <Listado colaboradores={colaboradores} />
    </div>
  )
}  
export default App