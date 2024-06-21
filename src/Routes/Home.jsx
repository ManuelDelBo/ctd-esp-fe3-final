import React from 'react'
import Card from '../Components/Card'
import { useContextProvider } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useContextProvider();
  return (
    <main className="">
      <h1>Home</h1>
      <div className='card-grid'>
      {state.dentists.length > 0 ? (
          state.dentists.map(dentist => (
            <Card
              key={dentist.id}
              id={dentist.id}
              name={dentist.name}
              username={dentist.username}
            />
          ))
        ) : (
          <p>Cargando dentistas...</p>
        )}
      </div>
    </main>
  );
}

export default Home;