import { Fragment } from 'react';

const DeliveryLocationForm = (props) => {
	return (
		<Fragment>
			<div className='border rounded h-32 text-center'>
				Google maps goes here
			</div>
			<div className='mt-5 flex flex-row-reverse gap-3'>
				<button
					onClick={() => {
						props.setCheckoutFormHandler('payment');
					}}
					type='button'
					className='primary-button'>
					Next
				</button>
				<button
					onClick={() => {
						props.setCheckoutFormHandler('contact_details');
					}}
					type='button'
					className='secondary-button'>
					Previous
				</button>
			</div>
		</Fragment>
	);
};

export default DeliveryLocationForm;
