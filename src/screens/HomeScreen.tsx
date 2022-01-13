import { BtnMyLocation, MapView } from '../components';
import { ReactLogo } from '../components/ReactLogo';

export const HomeScreen = () => {
	return (
		<div>
			<MapView />
			<BtnMyLocation />
			<ReactLogo />
		</div>
	);
};
