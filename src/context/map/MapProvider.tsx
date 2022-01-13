import { useReducer } from 'react';
import { Map, Marker, Popup } from 'mapbox-gl';
import { MapContext } from './MapContext';
import { mapReducer } from './mapReducer';

interface MapProviderProps {
	children: JSX.Element | JSX.Element[];
}

export interface MapState {
	isMapReady: boolean;
	map?: Map;
}

const INITIAL_STATE: MapState = {
	isMapReady: false,
	map: undefined,
};

export const MapProvider = ({ children }: MapProviderProps) => {
	const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);

	const setMap = (map: Map) => {
		const myLocationPopUp = new Popup().setHTML(`<h4>Here I am</h4>`);

		new Marker({ color: '#61dafb' })
			.setLngLat(map.getCenter())
			.setPopup(myLocationPopUp)
			.addTo(map);

		dispatch({ type: 'setMap', payload: map });
	};

	return (
		<MapContext.Provider
			value={{
				...state,

				setMap,
			}}
		>
			{children}
		</MapContext.Provider>
	);
};
