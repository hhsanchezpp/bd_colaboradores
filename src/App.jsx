import { useState} from "react";
import "./App.css"
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Alerts from "./components/Alerts/Alerts";
import Buscador from "./components/Buscador/Buscador";

const App = () => {
	const [colaboradores, setColaboradores] = useState([]);
	const [mensaje, setMensaje] = useState("");
	const [error, setError] = useState(false);
	const [exito, setExito] = useState(false);
	return (
		<div className="container ml-5">
        <div class="row">
            <div class="col-lg-9">
              <h1 className="mb-4">Listado de Colaboradores</h1>
                  <Buscador/>
                  <Listado colaboradores={colaboradores} />
            </div>
            <div class="col-lg-3">
                  <Formulario colaboradores={colaboradores} setColaboradores={setColaboradores} setError={setError} setExito={setExito} setMensaje={setMensaje} />
                  {error && <Alerts color={"danger"} mensaje={mensaje} />}
                  {exito && <Alerts color={"success"} mensaje={mensaje} />}
			      </div>
          </div>
      </div>
	);
};
export default App;
