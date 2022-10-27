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
					className='bg-independence-100 hover:bg-independence-200 active:ring-1 active:ring-independence-300 px-3 py-1 rounded'>
					Next
				</button>
				<button
					onClick={() => {
						props.setCheckoutFormHandler('contact_details');
					}}
					type='button'
					className='bg-h-gray-100 hover:bg-h-gray-200 active:ring-1 active:ring-h-gray-300 px-3 py-1 rounded'>
					Previous
				</button>
			</div>
		</Fragment>
	);
};

export default DeliveryLocationForm;
