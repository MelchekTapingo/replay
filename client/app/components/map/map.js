import angular from 'angular';
import uiRouter from 'angular-ui-router';
import L from 'leaflet';
import        'leaflet-css';
import leafletDraw from 'leaflet-draw';
import leafletDrawCss from 'leaflet-draw/dist/leaflet.draw.css';
import leafletLabel from  'leaflet-label';
import                    'leaflet-label-css';
import mapComponent from './map.component';
import MapService from './services/map.service';
import TrackService from './services/track.service';

let mapModule = angular.module('map', [
  uiRouter
])
  .service({MapService})
  .service({TrackService})
  .component('map', mapComponent);

export default mapModule;
