import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { MapApp } from './MapApp';

mapboxgl.accessToken =
	'pk.eyJ1IjoiYWxlam9ib2dhMjAiLCJhIjoiY2t5Ymxpcjd4MGdnbDJ1bWY5d3F6c2J1bSJ9.TCSWxE4QZztgbqoFVTFHXw';

if (!navigator.geolocation) {
	alert("Your browser doesn't have geolocation");
	throw new Error("Your browser doesn't have geolocation");
}

ReactDOM.render(
	<React.StrictMode>
		<MapApp />
	</React.StrictMode>,
	document.getElementById('root')
);
