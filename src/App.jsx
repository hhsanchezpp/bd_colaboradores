import { useState, useEffect } from 'react'
import './App.css'
import Alerts from './components/Alerts/Alerts'
import Buscador from './components/Buscador/Buscador'

function App() {
let prueba = "0"

const [mensaje, setMensaje] = useState("")
const [error, setError] = useState(false)
const [exito, setExito] = useState(false)

useEffect(()=>{
  if (prueba === "") {
    setError(true);
    setExito(false);
    setMensaje("error");
    
  } else {
    setExito(true);
    setError(false);
    setMensaje("tiene algo");
  }
},[prueba])
  return (
    <div>
      <h1>Lista de colaboradores</h1>
      <Buscador />
      <br />
      {error && <Alerts color={"danger"} mensaje={mensaje}/>}
      {exito && <Alerts color={"success"} mensaje={mensaje}/>}

    </div>

  )
}


export default App
