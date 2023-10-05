import { useState } from "react";
import PropsTypes from "prop-types"

const Formulario = ({ colaboradores, setColaboradores, setError, setExito, setMensaje }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !edad || !cargo || !telefono) {
      setError(true);
      setExito(false)
      setMensaje('Todos los datos son obligatorios')
      return;
    } else {
      setError(false);
      setExito(true)
      setMensaje("Colaborador agregado exitosamente")
      setName("");
      setEmail("");
      setEdad("");
      setCargo("");
      setTelefono("");
      const colaborador = { name, email, edad, cargo, telefono };
      setColaboradores([...colaboradores, colaborador]);
    }
  }
  return (
    <div className="">
      <h2 className="mb-5 mt-3"> Agregar colaborador</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">

          <label className="form-label" htmlFor="name">
            Nombre
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label className="form-label" htmlFor="edad">
            Edad
          </label>
          <input
            className="form-control"
            type="edad"
            name="edad"
            id="edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label className="form-label" htmlFor="cargo">
            Cargo
          </label>
          <input
            className="form-control"
            type="cargo"
            name="cargo"
            id="cargo"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label className="form-label" htmlFor="telefono">
            Telefono
          </label>
          <input
            className="form-control"
            type="telefono"
            name="telefono"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary container mt-3">
          Agregar Colaborador
        </button>
      </form>
    </div>
  );
};

Formulario.propTypes = {
  colaboradores: PropsTypes.array.isRequired, 
  setColaboradores: PropsTypes.func.isRequired, 
  setError: PropsTypes.func.isRequired, 
  setExito: PropsTypes.func.isRequired, 
  setMensaje: PropsTypes.func.isRequired
}

export default Formulario;