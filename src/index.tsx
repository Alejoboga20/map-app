import React from 'react';
import ReactDOM from 'react-dom';
import { MapApp } from './MapApp';

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
