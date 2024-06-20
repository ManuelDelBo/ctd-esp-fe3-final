import React from "react";

const Error = () => {
    return (
    <div style={{ backgroundColor: "red" }}>
        <h3>
        Por favor chequea que la información sea correcta:
        </h3>
        <h4>
        -El nombre debe tener mas de 5 caracteres.
        </h4>
        <h4>
        -El formato del mail debe ser correcto.
        </h4>
    </div>
    );
};

export default Error;