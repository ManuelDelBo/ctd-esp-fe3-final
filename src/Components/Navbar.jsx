import React from 'react'
import { Link } from 'react-router-dom'
import { useContextProvider } from './utils/global.context';
import '../index.css';

const Navbar = () => {
  const {state, dispatch} = useContextProvider();

  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: "SET_THEME", payload: newTheme });
  };

  return (
    <nav className={state.theme}>
      <Link to="/">
      <div className="navbar-left">
      <img src={`${process.env.PUBLIC_URL}/DH.ico`} alt='DH-logo' />
      <h3>Odontologos</h3>
      </div>
      </Link>
      <div className="navbar-right">
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/contacto">
        <h4>Contacto</h4>
      </Link>
      <Link to="/favs">
        <h4>Favoritos</h4>
      </Link>
      <button onClick={toggleTheme}>Modo oscuro</button>
    </div>

    </nav>
  )
}

export default Navbar