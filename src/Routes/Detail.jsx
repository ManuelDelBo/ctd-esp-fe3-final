import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useContextProvider } from '../Components/utils/global.context';

const Detail = () => {
  const { id } = useParams(); 
  const { state } = useContextProvider();
  const [dentist, setDentist] = useState(null); 
  const url = `https://jsonplaceholder.typicode.com/users/${id}`; 

  useEffect(() => {

    const fetchDentist = async () => {
      try {
        const response = await axios.get(url);
        setDentist(response.data); 
      } catch (error) {
        console.error('Error fetching dentist:', error);
      }
    };
    fetchDentist();
  }, [id]); 

  return (
    <div className={state.theme}>
      <h1>Detalle del dentista</h1>
      {dentist ? (
        <div className="grid-container">
          <div className="grid-item">
            <p className="label">Nombre:</p>
            <p>{dentist.name}</p>
          </div>
          <div className="grid-item">
            <p className="label">Email:</p>
            <p>{dentist.email}</p>
          </div>
          <div className="grid-item">
            <p className="label">Teléfono:</p>
            <p>{dentist.phone}</p>
          </div>
          <div className="grid-item">
            <p className="label">Sitio web:</p>
            <p>{dentist.website}</p>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default Detail;

