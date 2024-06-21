import React from 'react'
import Card from '../Components/Card'
import { useContextProvider } from '../Components/utils/global.context';

const Home = () => {
  const {state} = useContextProvider();
  return (
    <main className={state.theme}>
      <h1>Dentistas</h1>
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