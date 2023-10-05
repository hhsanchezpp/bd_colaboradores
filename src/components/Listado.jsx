import BoxCard from "./BoxCard";
export const BaseColaboradores = [
  {
  name: "Juan Soto",
  email: "juans@colaborador.com",
  edad: "23",
  cargo: "Desarrollador FrontEnd",
  telefono: "99887766"
  },
  {
  name: "Diego Riquelme",
  email: "diegor@colaborador.com",
  edad: "28",
  cargo: "Ingeniero DevOps",
  telefono: "99226644"
  },
  {
  name: "Lucas Pailamilla",
  email: "lucasp@colaborador.com",
  edad: "31",
  cargo: "Desarrollador Backend",
  telefono: "88779955"
  },
  ]

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
				<BoxCard key={index} colaborador={cli} />
			))}
		</>
	);
};

Listado.propTypes

export default Listado;
