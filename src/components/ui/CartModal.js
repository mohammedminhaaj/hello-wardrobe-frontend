import { ArrowRight, X } from 'react-feather';

const CartModal = () => {
	return (
		<div className='fixed top-0 left-0 right-0 bottom-0 z-30 w-full h-auto backdrop-blur-sm'>
			<div className='p-4 w-full md:w-2/3 mx-auto h-auto'>
				<div className='bg-isabelline-100 rounded-lg shadow-xl'>
					<div className='flex justify-between items-center p-5 rounded-t'>
						<h3 className='text-xl font-medium text-space-cadet-300'>
							Shopping bag
						</h3>
						<button>
							<X />
						</button>
					</div>
					<div className='p-6 overflow-y-auto max-h-[65vh] text-center font-thin'>
						Cart Data goes here
					</div>
					<div className='flex flex-row-reverse p-6 space-x-2 rounded'>
						<button type='button' className='flex primary-button'>
							Continue to payment
							<ArrowRight />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartModal;
