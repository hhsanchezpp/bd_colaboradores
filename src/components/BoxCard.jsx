import  propsTypes from "prop-types"

const BoxCard = ({ colaborador }) => {
	return (
		<div className="mt-6">
			<div className="card">
				<div className="row d-flex align-items-center justify-content-center">
					<div className="col-lg-2">
						<p className="fw-bold ">
							<span className="fw-normal">{colaborador.name}</span>
						</p>
					</div>
					<div className="col-lg-4">
						<p className="fw-bold">
							<span className="fw-normal">{colaborador.email}</span>
						</p>
					</div>
					<div className="col-lg-1">
						<p className="fw-bold">
							<span className="fw-normal">{colaborador.edad}</span>
						</p>
					</div>
					<div className="col-lg-2">
						<p className="fw-bold">
							<span className="fw-normal">{colaborador.cargo}</span>
						</p>
					</div>
					<div className="col-lg-2">
						<p className="fw-bold">
							<span className="fw-normal">{colaborador.telefono}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

BoxCard.propTypes = {
  colaborador: propsTypes.object.isRequired
}

export default BoxCard;
