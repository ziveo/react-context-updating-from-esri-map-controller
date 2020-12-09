import React, { useEffect, useState } from 'react';

import { Header } from './Header';
import mapController from '../controller/MapController';

import AppContext from '../store/AppContext';

import './App.scss';
import { Footer } from './Footer';

const App = () => {
  const [coordinate, setCoordinate] = useState();

  useEffect(() => {
    mapController.initializeMap(setCoordinate).then(() => {
      console.log('Map ready');
    });
  }, []);

  return (
    <AppContext.Provider value={{ coordinate, setCoordinate }}>
      <div className='App'>
        <Header />
        <main id='mapContainer' />
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

export default App;
