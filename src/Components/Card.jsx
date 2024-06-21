import React from "react";
import { Link } from "react-router-dom";
import { useContextProvider } from "./utils/global.context";


const Card = ({ name, username, id }) => {
  const { state, dispatch} = useContextProvider();

  const addFav = () => {
    if (state.favorites.some(fav => fav.id === id)) {
      alert(`${name} ya está en favoritos.`);
      return;
    }
    const newFav = { id, name, username };
    dispatch({ type: "ADD_FAV", payload: newFav });
    alert(`${name} agregado a favoritos.`);
  };

  return (
    <div className="card">
      <img src={`${process.env.PUBLIC_URL}/images/doctor.jpg`} alt="Doctor" />
      <Link to={`/dentist/${id}`}>
      <h3>{name}</h3>
      <p>{username}</p>
      </Link>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
