import { Fragment } from 'react';
import Overview from '../pages/Overview';
import Shop from '../pages/Shop';

const Main = () => {
	return (
		<Fragment>
			<h2 className='sr-only'>Body section</h2>
			<Shop />
		</Fragment>
	);
};

export default Main;
