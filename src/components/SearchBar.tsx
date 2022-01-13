import { ChangeEvent, useContext, useRef } from 'react';
import { PlacesContext } from '../context/places/PlacesContext';

export const SearchBar = () => {
	const debounceRef = useRef<NodeJS.Timeout>();
	const { searchPlacesByTerm } = useContext(PlacesContext);

	const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (debounceRef.current) {
			clearTimeout(debounceRef.current);
		}

		debounceRef.current = setTimeout(() => {
			searchPlacesByTerm(event.target.value);
		}, 1000);
	};

	return (
		<div className='search-container'>
			<input
				type='text'
				className='form-control'
				placeholder='search places'
				onChange={onQueryChange}
			/>
		</div>
	);
};
