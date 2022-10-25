import { Fragment } from 'react';
import CheckoutForm from '../pages/CheckoutForm';
import Overview from '../pages/Overview';
import Shop from '../pages/Shop';

const Main = () => {
	return (
		<Fragment>
			<h2 className='sr-only'>Body section</h2>
			<CheckoutForm />
		</Fragment>
	);
};

export default Main;
