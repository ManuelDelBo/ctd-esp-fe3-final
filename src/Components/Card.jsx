import React from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {

  const addFav = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.some(item => item.id === id)) {
      alert(`${name} ya está en favoritos.`);
      return;
    }
    favorites.push({ id, name, username });
    
    localStorage.setItem('favorites', JSON.stringify(favorites));

    alert(`${name} agregado a favoritos.`);
  };

  return (
    <div className="card">
      <img src={`${process.env.PUBLIC_URL}/images/doctor.jpg`} alt="Doctor" />
      <h3>{name}</h3>
      <p>Username: {username}</p>
      <Link to={`/dentist/${id}`}>Ver detalles</Link>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
