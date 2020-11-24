import React, { useContext } from 'react';
import AppContext from '../store/AppContext';

export const Header = () => {
  const { coordinate } = useContext(AppContext);

  console.log(coordinate);

  return (
    <header className='App-header'>
      <h1>React context updated from ESRI MapController</h1>
    </header>
  );
};
