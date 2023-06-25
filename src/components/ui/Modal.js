import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'react-feather';
import Backdrop from './Backdrop';
import { motion } from 'framer-motion';

const Modal = (props) =>
	createPortal(
		<Fragment>
			<Backdrop onClose={props.onClose} />
			<div className='flex justify-center'>
				<motion.section
					initial={{ opacity: 0, y: '-100vh' }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: '-100vh' }}
					transition={{ duration: 0.7, type: 'spring', bounce: 0.5 }}
					className='fixed p-5 w-full mx-auto z-40 md:w-2/3 lg:w-2/4 h-auto'>
					<div className='bg-isabelline-100 rounded-lg shadow-xl p-5 max-h-[92vh]'>
						<div className='flex justify-between items-center'>
							<header>
								<h3 className='text-xl font-medium text-space-cadet-300'>
									{props.headerText}
								</h3>
							</header>
							<motion.button
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.9 }}
								type='button'>
								<X onClick={props.onClose} />
							</motion.button>
						</div>
						<div className='pt-5'>{props.children}</div>
					</div>
				</motion.section>
			</div>
		</Fragment>,
		document.getElementById('overlays')
	);

export default Modal;
