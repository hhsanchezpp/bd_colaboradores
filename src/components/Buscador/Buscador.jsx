import propsTypes from "prop-types"
import {useEffect} from "react";

const Buscador = ({filtrado, setFiltrado,  setResultado, colaboradores }) => {

 useEffect(() => {
    if (!filtrado) {
		setResultado(colaboradores)
	}
	else {
		const filteredResult = colaboradores.filter((colaborador) =>{
			return (
				colaborador.telefono.toLowerCase().trim().includes(filtrado.toLowerCase().trim()) ||
				colaborador.name.toLowerCase().trim().includes(filtrado.toLowerCase().trim()) ||
				colaborador.edad.toLowerCase().trim().includes(filtrado.toLowerCase().trim()) ||
				colaborador.cargo.toLowerCase().trim().includes(filtrado.toLowerCase().trim()) ||
				colaborador.email.toLowerCase().trim().includes(filtrado.toLowerCase().trim())
			)
		})
                setResultado(filteredResult);

	}
    },[filtrado, colaboradores, setResultado])
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
    setFiltrado: propsTypes.func.isRequired,
    setResultado:propsTypes.func.isRequired,
    colaboradores:propsTypes.array.isRequired
}

export default Buscador;


