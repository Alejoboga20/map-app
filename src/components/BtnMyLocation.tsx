import { useContext } from 'react';
import { MapContext, PlacesContext } from '../context';

export const BtnMyLocation = () => {
	const { isMapReady, map } = useContext(MapContext);
	const { userLocation } = useContext(PlacesContext);

	const onClick = () => {
		if (!isMapReady) throw new Error('Map not ready');
		if (!userLocation) throw new Error('There is no location');

		map?.flyTo({
			zoom: 14,
			center: userLocation,
		});
	};

	return (
		<button
			className='btn btn-primary'
			style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 999 }}
			onClick={onClick}
		>
			My Location
		</button>
	);
};
