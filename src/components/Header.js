import React, { useContext } from 'react';
import AppContext from '../store/AppContext';

export const Header = () => {
  const { coordinate } = useContext(AppContext);

  console.log(coordinate);

  return (
    <header className='App-header'>
      <h1>GIS Tools - ESRI App</h1>
    </header>
  );
};
