import OrderHistoryItem from './OrderHistoryItem';

const OrderHistoryCard = () => {
	return (
		<div className='border rounded p-5'>
			<div className='flex justify-between'>
				<div className='flex gap-5'>
					<div className='hidden md:block lg:block xl:block'>
						<p className='font-medium'>Order Number</p>
						<p className='font-thin'>267135678321</p>
					</div>
					<div>
						<p className='font-medium'>Date Placed</p>
						<p className='font-thin'>12th July 2022</p>
					</div>
					<div>
						<p className='font-medium'>Total Amount</p>
						<p className='font-thin'>₹450</p>
					</div>
				</div>
				<p>View Order</p>
			</div>
			<hr className='my-5' />
			<OrderHistoryItem />
			<hr className='my-5' />
			<OrderHistoryItem />
		</div>
	);
};

export default OrderHistoryCard;
