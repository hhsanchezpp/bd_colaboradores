import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Listado, { BaseColaboradores } from "./components/Listado";
import Alerts from "./components/Alerts/Alerts";
import Buscador from "./components/Buscador/Buscador";



const App = () => {
	const [colaboradores, setColaboradores] = useState(BaseColaboradores);
	const [mensaje, setMensaje] = useState("");
	const [error, setError] = useState(false);
	const [exito, setExito] = useState(false);
	return (
		<div className="container-fluid px-5 mt-5 ">
			<div className="row">
				<div className="col-lg-9 text-center">
					<h1 className="mb-4">Listado de Colaboradores</h1>
					<Buscador />
					<Listado colaboradores={colaboradores} />
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
