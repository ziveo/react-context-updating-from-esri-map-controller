import React, { useEffect, useState } from 'react';

import { Header } from './Header';
import mapController from '../controller/MapController';

import AppContext from '../store/AppContext';

import './App.scss';

const App = () => {
  const [coordinate, setCoordinate] = useState();

  useEffect(() => {
    mapController.initializeMap(setCoordinate).then(() => {
      console.log('map created');
    });
  }, []);

  return (
    <AppContext.Provider value={{ coordinate, setCoordinate }}>
      <div className='App'>
        <Header />
        <main id='mapContainer' />
      </div>
    </AppContext.Provider>
  );
};

export default App;
