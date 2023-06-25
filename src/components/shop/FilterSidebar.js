import { CheckCircle, XCircle } from 'react-feather';
import Backdrop from '../ui/Backdrop';
import FilterSection from './FilterSection';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';

const container = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

const buttonChildren = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			bounce: 0.5,
		},
	},
};

const FilterSidebar = (props) => {
	return createPortal(
		<motion.section>
			<Backdrop onClose={props.cancelHandler} />
			<motion.aside
				initial={{ opacity: 0, x: '100%' }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: '100%' }}
				transition={{ type: 'spring', duration: 0.7, }}
				className='fixed z-40 right-0 w-64 h-full p-5 bg-isabelline-100 rounded'>
				<h2 className='font-bold text-xl'>Filters</h2>
				<hr className='my-5 border-t-h-gray-100' />
				<div className='overflow-y-auto overflow-x-hidden max-h-[65vh]'>
					<FilterSection
						filterData={props.filterData}
						activeFilters={props.activeFilters}
						setActiveFilters={props.setActiveFilters}
					/>
				</div>
				<div className='md:hidden fixed bottom-0 w-[216px] mb-5'>
					<motion.div
						variants={container}
						initial='hidden'
						animate='visible'
						className='flex justify-around gap-3'>
						<motion.button
							variants={buttonChildren}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							type='button'
							onClick={() => {
								props.setActiveFilters({ type: 'clear' });
							}}
							className='secondary-button'>
							<XCircle size={16} className='my-auto' />
							Clear
						</motion.button>
						<motion.button
							variants={buttonChildren}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							type='button'
							onClick={props.cancelHandler}
							className='primary-button'>
							<CheckCircle size={16} className='my-auto' />
							Done
						</motion.button>
					</motion.div>
				</div>
			</motion.aside>
		</motion.section>,
		document.getElementById('overlays')
	);
};

export default FilterSidebar;
