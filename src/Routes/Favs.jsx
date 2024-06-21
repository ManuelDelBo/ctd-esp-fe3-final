import React from "react";
import Card from "../Components/Card";
import { useContextProvider } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContextProvider();

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {state.favorites.length > 0 ? (
          state.favorites.map(dentist => (
            <Card
              key={dentist.id}
              id={dentist.id}
              name={dentist.name}
              username={dentist.username}
            />
          ))
        ) : (
          <p>No hay dentistas favoritos.</p>
        )}
      </div>
    </>
  );
};

export default Favs;
