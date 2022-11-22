import { Fragment } from 'react';
const OrderHistoryItem = () => {
	return (
		<Fragment>
			<div className='flex gap-5'>
				<div className='basis-1/3 border h-32 rounded text-center'>
					Image goes here
				</div>
				<div className='basis-2/3 flex flex-col'>
					<p className='font-bold'>Micro bagpack</p>
					<p className='font-medium'>
						{parseFloat('70.00').toLocaleString('en-IN', {
							style: 'currency',
							currency: 'INR',
						})}
					</p>
					<p>View product</p>
				</div>
			</div>
			<div className='mt-3'>
				<p>Delivered on 12th July 2022</p>
			</div>
		</Fragment>
	);
};

export default OrderHistoryItem;
