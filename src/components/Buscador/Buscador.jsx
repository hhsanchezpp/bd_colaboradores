import { useState } from "react";

const Buscador = () => {
// 
const [cap, setCap] = useState("")
    const capInput =(e) => {
        setCap(e.target.value)
    }
// console.log (cap)
    const filtrar = (e) => {
        e.preventDefault ()
        if (cap === ""){
            console.log("esta vacio")
            return
        }
        else{
            console.log("enviado")
            setCap("")
    
        }
    }

    return (
        <div className="d-flex gap-4">
            <form className="d-flex gap-4" onSubmit={filtrar} >
                <input
                    className="form-control"
                    placeholder="Buscador"
                    value={cap}
                    onChange={capInput}
                    >
                </input>
                <button
                    className="btn btn-primary"
                    type="submit">
                    Filtrar
                </button>
            </form>
        </div>

    );
};

export default Buscador;
