import Marker from './marker';
import Map from './map';
import {Panel} from './panels';
import Plugin from './plugin';
import Popup from './popup';
import {ThreeLayer} from './layers';
import mapboxgl from 'mapbox-gl';
import * as three from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import './css/loaders.css';
import './css/swiper.css';
import './css/mini-tokyo-3d.css';

const THREE = Object.assign({GLTFLoader}, three);

export {
    mapboxgl,
    Marker,
    Map,
    Panel,
    Plugin,
    Popup,
    THREE,
    ThreeLayer
};
