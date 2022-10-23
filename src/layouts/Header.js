import { Fragment } from 'react';
import NavigationBar from '../components/ui/NavigationBar';

const Header = () => {
	return (
		<Fragment>
			<h2 className='sr-only'>Header section</h2>
			<NavigationBar />
		</Fragment>
	);
};

export default Header;
