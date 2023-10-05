import  propsTypes from "prop-types"

const BoxCard = ({ colaboradore }) => {
	return (
		<div className="mt-6">
			<div className="card">
				<div className="row d-flex align-items-center justify-content-center">
					<div className="col-lg-2">
						<p className="fw-bold ">
							<span className="fw-normal">{colaboradore.name}</span>
						</p>
					</div>
					<div className="col-lg-4">
						<p className="fw-bold">
							<span className="fw-normal">{colaboradore.email}</span>
						</p>
					</div>
					<div className="col-lg-1">
						<p className="fw-bold">
							<span className="fw-normal">{colaboradore.edad}</span>
						</p>
					</div>
					<div className="col-lg-2">
						<p className="fw-bold">
							<span className="fw-normal">{colaboradore.cargo}</span>
						</p>
					</div>
					<div className="col-lg-2">
						<p className="fw-bold">
							<span className="fw-normal">{colaboradore.telefono}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

BoxCard.propTypes = {
  colaboradore: propsTypes.string.isRequired
}

export default BoxCard;
