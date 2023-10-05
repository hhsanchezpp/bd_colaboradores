import BoxCard from './BoxCard';
const Listado = ({ colaboradores }) => {
  return (
    <>
      <div className="card">
            <div class="row">
        <div class="col-lg-2">
          <p className="fw-bold">
            Nombre
          </p>
          </div>
          <div class="col-lg-2">
          <p className="fw-bold">
            Email
          </p>
          </div>
          <div class="col-lg-2">
          <p className="fw-bold">
            Edad
          </p>
          </div>
          <div class="col-lg-2">
          <p className="fw-bold">
            Cargo
          </p>
          </div>
          <div class="col-lg-4">
          <p className="fw-bold">
            Telefono
          </p>
          </div>
          </div>
        </div>
     {colaboradores.map((cli, index) => (
       <BoxCard key={index}  colaboradore={cli} />
     ))}
         
    </>
  );
}

export default Listado