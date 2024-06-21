import React from "react";
import { useContextProvider } from "./utils/global.context";

const Error = () => {
    const { state } = useContextProvider();
    return (
    <div className="error">
        <h3>
        Hay un error en la información aportada:
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