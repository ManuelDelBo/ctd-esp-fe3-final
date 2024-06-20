import React, { useState } from 'react'
import Form from '../Components/Form'
import Error from '../Components/Error';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
});

const [show, setShow] = useState(false);
const [error, setError] = useState(false);

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}; 

const handleSubmit = (event) => {
    event.preventDefault();
    if (datos.nombre.trim().length >= 5 && validateEmail(datos.email)) {
    setShow(true);
    setError(false);
    } else {
    setError(true);
    setShow(false);
    }
};
  return (
    <div >
      <h1>Dejanos tus datos</h1>
      <>
        <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
            type="text"
            value={datos.nombre}
            onChange={(event) =>
            setDatos({ ...datos, nombre: event.target.value })
            }
        />
        <label>Email:</label>
        <input
            type="text"
            value={datos.email}
            onChange={(event) =>
              setDatos({ ...datos, email: event.target.value })
            }
            />
            <button type="submit">ENVIAR</button>
        </form>
        {show && <h1>Gracias {datos.nombre}, te contactaremos via mail</h1>}
        {error && <Error />}
        </>
    </div>
  );
}

export default Contact