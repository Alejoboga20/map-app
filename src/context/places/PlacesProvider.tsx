import { useEffect, useReducer } from 'react';
import { searchApi } from '../../apis';
import { getUserLocation } from '../../helpers';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';

interface PlacesProviderProps {
	children: JSX.Element | JSX.Element[];
}

export interface PlacesState {
	isLoading: boolean;
	userLocation?: [number, number];
}

const INITIAL_STATE: PlacesState = {
	isLoading: true,
	userLocation: undefined,
};

export const PlacesProvider = ({ children }: PlacesProviderProps) => {
	const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

	useEffect(() => {
		getUserLocation().then((coords) => dispatch({ type: 'setUserLocation', payload: coords }));
	}, []);

	const searchPlacesByTerm = async (query: string) => {
		if (query.length === 0) {
			return [];
		}

		if (!state.userLocation) throw new Error('no location');

		const response = await searchApi.get(`/${query}.json`, {
			params: {
				proximity: state.userLocation.join(','),
			},
		});

		console.log(response.data);
	};

	return (
		<PlacesContext.Provider value={{ ...state, searchPlacesByTerm }}>
			{children}
		</PlacesContext.Provider>
	);
};
