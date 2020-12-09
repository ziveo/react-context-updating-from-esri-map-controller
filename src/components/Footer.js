import React, { useContext } from 'react';
import AppContext from '../store/AppContext';

export const Footer = () => {
  const { coordinate } = useContext(AppContext);

  return (
    <footer id='footer'>
      <table>
        <tbody>
          <tr>
            <td>Lat</td>
            <td>{coordinate && coordinate.lat.toFixed(5)}</td>
          </tr>
          <tr>
            <td>Long</td>
            <td>{coordinate && coordinate.long.toFixed(5)}</td>
          </tr>
        </tbody>
      </table>
    </footer>
  );
};
