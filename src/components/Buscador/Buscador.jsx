const Buscador = () => {


    
    return (
        <div className="d-flex gap-4">
            <input
                className="form-control"
                placeholder="Buscador">
            </input>
            <button
                className="btn btn-primary"
                type="submit">
                Buscar
            </button>
        </div>
    );
};

export default Buscador;
