import React from 'react'
import { Link } from 'react-router-dom'
import { useContextProvider } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {dentists} = useContextProvider();

  return (
    <nav>
      <div className="navbar">
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/contacto">
        <h4>Contacto</h4>
      </Link>
      <Link to="/favs">
        <h4>Favoritos</h4>
      </Link>
    </div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar