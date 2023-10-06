import BoxCard from "./BoxCard";

const Listado = ({ colaboradores, filtrado }) => {

	let resultadoFiltrado = ""

	if (!filtrado) {
		resultadoFiltrado = colaboradores
	}
	else {
		resultadoFiltrado = colaboradores.filter((colaborador) => {
			return (
				colaborador.telefono.toLowerCase().trim().includes(filtrado.toLowerCase().trim()) ||
				colaborador.name.toLowerCase().trim().includes(filtrado.toLowerCase().trim()) ||
				colaborador.edad.toLowerCase().trim().includes(filtrado.toLowerCase().trim()) ||
				colaborador.cargo.toLowerCase().trim().includes(filtrado.toLowerCase().trim()) ||
				colaborador.email.toLowerCase().trim().includes(filtrado.toLowerCase().trim())
			)
		})
	}

	return (
		<div>
			<div className="card">
				<div className="row d-flex  justify-content-center">
					<div className="col-lg-2">
						<p className="fw-bold">Nombre</p>
					</div>
					<div className="col-lg-4">
						<p className="fw-bold">Email</p>
					</div>
					<div className="col-lg-1">
						<p className="fw-bold">Edad</p>
					</div>
					<div className="col-lg-2">
						<p className="fw-bold">Cargo</p>
					</div>
					<div className="col-lg-2">
						<p className="fw-bold">Telefono</p>
					</div>
				</div>
			</div>
			{resultadoFiltrado?.map((colaborador, index) => (
				<BoxCard key={index} colaborador={colaborador} />
			))}
			{resultadoFiltrado.length === 0 && <p className={"alert alert-danger mt-5"}>No hay coicidencias en tu busqueda! 😴</p>}
		</div>
	);
};

Listado.propTypes

export default Listado;
