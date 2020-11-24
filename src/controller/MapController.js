import { loadModules } from 'esri-loader';

class MapController {
  constructor() {
    this._map = undefined;
    this._mapView = undefined;
    this.setCoordinate = undefined;
  }

  initializeMap = async (setCoordinate) => {
    this.setCoordinate = setCoordinate;
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
      this.setCoordinate({
        lat: evt.mapPoint.latitude,
        long: evt.mapPoint.longitude,
      });
    });
  };
}

const mapController = new MapController();
export default mapController;
