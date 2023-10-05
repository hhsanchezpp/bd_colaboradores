import { useState } from "react";

const Formulario = ({colaboradores, setColaboradores}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState(false)
  const [mensaje, setMensaje] = useState('')
    

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !edad || !cargo || !telefono) {
        setError(true);
        setMensaje('Todos los datos son obligatorios')
      return;
    } else {
        setError(false);
        alert('Formulario enviado');
        setName("");
        setEmail("");
        setEdad("");
        setCargo("");
        setTelefono("");
        const colaboradore = { name, email, edad, cargo, telefono };
        setColaboradores([...colaboradores, colaboradore]);
    }
  }
  return (
    <div className="w-50">
      <h1> Base de Datos de Colaboradores</h1>
      <form onSubmit={handleSubmit}>
          <div className="mb-2">
                  {error && <p className="text-danger">{mensaje}</p>}

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

        <button type="submit" className="btn btn-primary">
          Agregar Colaborador
        </button>
      </form>
    </div>
  );
};

export default Formulario;