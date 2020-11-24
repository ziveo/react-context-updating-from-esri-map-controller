import React, { useEffect, useState } from 'react';
import { setDefaultOptions } from 'esri-loader';

import { Header } from './Header';
import mapController from '../controller/MapController';

import AppContext from '../store/AppContext';

import './App.scss';

setDefaultOptions({
  version: '4.17',
  css: true,
});

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
