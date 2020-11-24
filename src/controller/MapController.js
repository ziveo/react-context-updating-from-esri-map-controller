import { loadModules, setDefaultOptions } from 'esri-loader';

setDefaultOptions({
  version: '4.17',
  css: true,
});

class MapController {
  constructor() {
    this._map = undefined;
    this._mapView = undefined;
  }

  initializeMap = async (setCoordinate) => {
    try {
      const [Map, MapView] = await loadModules(['esri/Map', 'esri/views/MapView']);
      this._map = new Map({
        basemap: 'gray-vector',
      });

      this._mapView = new MapView({
        map: this._map,
        container: 'mapContainer',
        basemap: 'gray-vector',
        center: [-100, 30],
        zoom: 5,
      });

      this._mapView.on('click', (evt) => {
        setCoordinate({
          lat: evt.mapPoint.latitude,
          long: evt.mapPoint.longitude,
        });
      });
    } catch (e) {
      console.log(e);
    }
  };
}

const mapController = new MapController();
export default mapController;
