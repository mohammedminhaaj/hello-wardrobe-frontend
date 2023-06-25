import { Check } from 'react-feather';
import Calendar from '../ui/Calendar/Calendar';
import ChooseTime from './ChooseTime';
import Modal from '../ui/Modal';

const SelectDateModal = (props) => {
	return (
		<Modal headerText='Select Date' onClose={props.onClose}>
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

			<div className='flex flex-row-reverse'>
				<button
					onClick={props.onClose}
					type='button'
					className='primary-button'>
					<Check className='my-auto' size={16} />
					Done
				</button>
			</div>
		</Modal>
	);
};

export default SelectDateModal;
