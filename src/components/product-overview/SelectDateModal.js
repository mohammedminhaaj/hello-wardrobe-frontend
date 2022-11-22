import { Fragment } from 'react';
import { Check, X } from 'react-feather';
import Backdrop from '../ui/Backdrop';
import Calendar from '../ui/Calendar/Calendar';

const SelectDateModal = (props) => {
	return (
		<Fragment>
			<Backdrop onClose={props.onClose} />
			<div className='flex justify-center'>
				<section className='fixed p-5 w-full mx-auto z-40 md:w-2/3 h-auto'>
					<div className='bg-isabelline-100 rounded-lg shadow-xl p-5'>
						<div className='flex justify-between items-center'>
							<h3 className='text-xl font-medium text-space-cadet-300'>
								Select Date
							</h3>
							<button type='button'>
								<X onClick={props.onClose} />
							</button>
						</div>
						<Calendar
							cartObject={props.cartObject}
							setCartObject={props.setCartObject}
						/>
						<div className='text-left md:text-center text-sm mt-8'>
							<p className='font-thin'>
								Multiple consecutive days can be selected by
								clicking on the start and end dates respectively
							</p>
							<p>
								Note: Product is available only on the dates
								which are not grayed out.
							</p>
						</div>
						<div className='flex flex-row-reverse mt-5'>
							<button
								onClick={props.onClose}
								type='button'
								className='primary-button'>
								<Check className='my-auto' size={16} />
								Done
							</button>
						</div>
					</div>
				</section>
			</div>
		</Fragment>
	);
};

export default SelectDateModal;
