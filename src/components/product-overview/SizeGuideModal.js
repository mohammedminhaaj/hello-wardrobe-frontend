import { Fragment } from 'react';
import { X } from 'react-feather';
import Backdrop from '../ui/Backdrop';

const SizeGuideModal = (props) => {
	return (
		<Fragment>
			<Backdrop onClose={props.onClose} />
			<div className='flex justify-center'>
				<section className='fixed p-5 w-full mx-auto z-40 md:w-2/3 h-auto'>
					<div className='bg-isabelline-100 rounded-lg shadow-xl'>
						<div className='flex justify-between items-center p-5 rounded-t'>
							<h3 className='text-xl font-medium text-space-cadet-300'>
								Size Guide
							</h3>
							<button type='button'>
								<X onClick={props.onClose} />
							</button>
						</div>
					</div>
				</section>
			</div>
		</Fragment>
	);
};

export default SizeGuideModal;
