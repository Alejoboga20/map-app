import axios from 'axios';

const searchApi = axios.create({
	baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
	params: {
		limit: 5,
		language: 'es',
		access_token:
			'pk.eyJ1IjoiYWxlam9ib2dhMjAiLCJhIjoiY2t5Ymxpcjd4MGdnbDJ1bWY5d3F6c2J1bSJ9.TCSWxE4QZztgbqoFVTFHXw',
	},
});

export default searchApi;
