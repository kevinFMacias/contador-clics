import React from "react";
import "../Stylesheets/Boton.css"

function Boton({ texto, esBotonDeClic, majerarClic }) {
    return (
        <button
            className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
            onClick={majerarClic}>
            {texto}
        </button>
    );
}

export default Boton;