import BoxCard from "./BoxCard";
const Listado = ({ colaboradores }) => {
	return (
		<>
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
			{colaboradores.map((cli, index) => (
				<BoxCard key={index} colaboradore={cli} />
			))}
		</>
	);
};

Listado.propTypes

export default Listado;
