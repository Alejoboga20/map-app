import { ChangeEvent, useRef } from 'react';

export const SearchBar = () => {
	const debounceRef = useRef<NodeJS.Timeout>();

	const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (debounceRef.current) {
			clearTimeout(debounceRef.current);
		}

		debounceRef.current = setTimeout(() => {
			console.log('search: ', event.target.value);
		}, 350);
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
