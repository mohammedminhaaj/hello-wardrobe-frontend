import { Fragment } from 'react';
import { Check, X } from 'react-feather';
import Backdrop from '../ui/Backdrop';
import Calendar from '../ui/Calendar/Calendar';
import ChooseTime from './ChooseTime';

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
						<div className='max-h-[23vh] md:max-h-[16vh] overflow-y-auto'>
							<ChooseTime
								cartObject={props.cartObject}
								setCartObject={props.setCartObject}
							/>
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
