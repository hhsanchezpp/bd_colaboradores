const BoxCard = ({colaboradore}) => {
    return (
      <div className="mt-5">
        
        <div className="card">
          <p className="fw-bold">
            Nombre: <span className="fw-normal">{colaboradore.name}</span>
          </p>
          <p className="fw-bold">
            Email: <span className="fw-normal">{colaboradore.email}</span>
          </p>
          <p className="fw-bold">
            Edad: <span className="fw-normal">{colaboradore.edad}</span>
          </p>
          <p className="fw-bold">
            Cargo: <span className="fw-normal">{colaboradore.cargo}</span>
          </p>
          <p className="fw-bold">
            Telefono: <span className="fw-normal">{colaboradore.telefono}</span>
          </p>
        </div>
      </div>
    );
  }
  export default BoxCard