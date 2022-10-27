import { ReactComponent as OrderPlaced } from '../assets/images/order-placed.svg';
const OrderSummary = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 p-5 gap-5'>
			<OrderPlaced className='w-64 h-64 m-auto' />
			<div className='p-5 space-y-3'>
				<p className='text-h-gray-300'>Payment successful</p>
				<h1 className='font-bold text-3xl'>Thanks for ordering</h1>
				<p>
					We appreciate your order, we're currently processing it. So
					hang tight and we'll send you a confirmation soon!
				</p>
				<div className='spacing-0'>
					<p className='text-h-gray-300'>Tracking number</p>
					<p>1234567890</p>
				</div>
				<div>Cart data goes here</div>
				<div className='grid grid-cols-2'>
					<div className='space-y-3'>
						<p className='font-bold'>Shipping Address</p>
						<p>ABC</p>
					</div>
					<div className='space-y-3'>
						<p className='font-bold'>Payment Information</p>
						<p>ABC</p>
					</div>
				</div>
				<hr className='my-5' />
				<div className='flex flex-row-reverse'>
					<button type='button' className='text-h-gray-300'>
						Continue Shopping
					</button>
				</div>
			</div>
		</div>
	);
};

export default OrderSummary;
