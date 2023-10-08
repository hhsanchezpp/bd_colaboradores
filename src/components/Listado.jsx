import BoxCard from "./BoxCard";

const Listado = ({resultado}) => {

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
			{resultado?.map((colaborador, index) => (
				<BoxCard key={index} colaborador={colaborador} />
			))}
			{resultado.length === 0 && <p className={"alert alert-danger mt-5"}>No hay coicidencias en tu busqueda! 😴</p>}
		</div>
	);
};

Listado.propTypes

export default Listado;
