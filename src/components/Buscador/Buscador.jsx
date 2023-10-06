import propsTypes from "prop-types"
const Buscador = ({filtrado, setFiltrado}) => {

    return (
        <div className="d-flex gap-4 mb-4">
            <form className="d-flex gap-4" >
                <input
                    className="form-control"
                    placeholder="Filtra colaboradores"
                    value={filtrado}
                    onChange={(e) => setFiltrado(e.target.value)}
                    >
                </input>
 
            </form>
        </div>

    );
};

Buscador.propTypes = {
    filtrado: propsTypes.string.isRequired,
    setFiltrado: propsTypes.func.isRequired
}

export default Buscador;


