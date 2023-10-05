const BoxCard = ({colaboradore}) => {
    return (
      <div className="mt-6">
        
        <div className="card">
            <div class="row">
        <div class="col-lg-2">
          <p className="fw-bold">
            <span className="fw-normal">{colaboradore.name}</span>
          </p>
          </div>
          <div class="col-lg-2">
          <p className="fw-bold">
            <span className="fw-normal">{colaboradore.email}</span>
          </p>
          </div>
          <div class="col-lg-2">
          <p className="fw-bold">
            <span className="fw-normal">{colaboradore.edad}</span>
          </p>
          </div>
          <div class="col-lg-2">
          <p className="fw-bold">
            <span className="fw-normal">{colaboradore.cargo}</span>
          </p>
          </div>
          <div class="col-lg-4">
          <p className="fw-bold">
            <span className="fw-normal">{colaboradore.telefono}</span>
          </p>
          </div>
          </div>
        </div>
      </div>
    );
  }
  export default BoxCard