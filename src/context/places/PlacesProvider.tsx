import { useEffect, useReducer } from 'react';
import { PlacesResponse, Feature } from '../../interfaces/places';
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
	isLoadingPlaces: boolean;
	places: Feature[];
}

const INITIAL_STATE: PlacesState = {
	isLoading: true,
	userLocation: undefined,
	isLoadingPlaces: false,
	places: [],
};

export const PlacesProvider = ({ children }: PlacesProviderProps) => {
	const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

	useEffect(() => {
		getUserLocation().then((coords) => dispatch({ type: 'setUserLocation', payload: coords }));
	}, []);

	const searchPlacesByTerm = async (query: string): Promise<Feature[]> => {
		if (query.length === 0) {
			return [];
		}

		if (!state.userLocation) throw new Error('no location');

		dispatch({ type: 'setLoadingPlaces' });

		const response = await searchApi.get<PlacesResponse>(`/${query}.json`, {
			params: {
				proximity: state.userLocation.join(','),
			},
		});

		dispatch({ type: 'setPlaces', payload: response.data.features });
		return response.data.features;
	};

	return (
		<PlacesContext.Provider value={{ ...state, searchPlacesByTerm }}>
			{children}
		</PlacesContext.Provider>
	);
};
