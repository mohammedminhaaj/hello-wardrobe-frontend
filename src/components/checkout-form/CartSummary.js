import { Fragment } from 'react';

const CartSummary = () => {
	return (
		<Fragment>
            <h1 className='hidden md:block lg:block xl:block text-lg font-bold'>Order Summary</h1>
			<div className='rounded py-4 px-2'>Cart data goes here</div>
		</Fragment>
	);
};

export default CartSummary;
