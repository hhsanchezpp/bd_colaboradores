import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Alerts from "./components/Alerts/Alerts";
import Buscador from "./components/Buscador/Buscador";
import {BaseColaboradores} from "./data/colaboradores"


const App = () => {
	const [colaboradores, setColaboradores] = useState(BaseColaboradores);
	const [mensaje, setMensaje] = useState("");
	const [error, setError] = useState(false);
	const [exito, setExito] = useState(false); 
	const [filtrado, setFiltrado] = useState("")

	return (
		<div className="container-fluid  px-md-5  mt-5 ">	
			<div className="row">
				<div className="col-lg-9 text-center">
					<h1 className="mb-4 text-start">Listado de Colaboradores</h1>
					<Buscador filtrado={filtrado} setFiltrado={setFiltrado}/>
					<Listado colaboradores={colaboradores} filtrado={filtrado} />
				</div>
				<div className="col-lg-3">
					<Formulario colaboradores={colaboradores} setColaboradores={setColaboradores} setError={setError} setExito={setExito} setMensaje={setMensaje} />
					{error && <Alerts color={"danger"} mensaje={mensaje} />}
					{exito && <Alerts color={"success"} mensaje={mensaje} />}
				</div>
			</div>
		</div>
	);
};
export default App;
