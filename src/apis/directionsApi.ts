import axios from 'axios';

const directionsApi = axios.create({
	baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
	params: {
		alternatives: false,
		geometries: 'geojson',
		overview: 'simplified',
		steps: false,
		language: 'es',
		access_token:
			'pk.eyJ1IjoiYWxlam9ib2dhMjAiLCJhIjoiY2t5Ymxpcjd4MGdnbDJ1bWY5d3F6c2J1bSJ9.TCSWxE4QZztgbqoFVTFHXw',
	},
});

export default directionsApi;
