import { Fragment } from 'react';
import CheckoutForm from '../pages/CheckoutForm';
import OrderSummary from '../pages/OrderSummary';
import Overview from '../pages/Overview';
import Shop from '../pages/Shop';

const Main = () => {
	return (
		<Fragment>
			<h2 className='sr-only'>Body section</h2>
			<div className='main-container'>
				<OrderSummary />
			</div>
		</Fragment>
	);
};

export default Main;
