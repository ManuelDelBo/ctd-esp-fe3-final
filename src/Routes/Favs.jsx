import React from "react";
import Card from "../Components/Card";
import { useContextProvider } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {dentists} = useContextProvider();

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        <ul>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Favs;
