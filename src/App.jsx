import { useState } from 'react'
import './App.css'
import Alerts from './components/Alerts/Alerts'
import Buscador from './components/Buscador/Buscador'

function App() {
// let prueba = ""

const [mensaje, setMensaje] = useState("")
const [error, setError] = useState(false)
const [exito, setExito] = useState(false)

// const condicionn = () => {
if (true){
  setError(true)
  setExito(false)
  setMensaje("error")
  
}else{
  setExito(true)
  setError(false)
  setMensaje("tiene algo")  
}
// }
// console.log(prueba)
  return (
    <div>
      <h1>Hola Mundo Real</h1>
      {/* <Buscador/> */}
      {error && <Alerts color={"danger"} mensaje={mensaje}/>}
      {exito && <Alerts color={"success"} mensaje={mensaje}/>}

    </div>

  )
}


export default App
