import { ReactComponent as Empty } from '../../assets/svg/no-data.svg';
import { motion } from 'framer-motion';

const NoData = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0 }}
			transition={{ duration: 0.5, delay: 0.3, type: 'tween' }}
			className='text-center'>
			<Empty className='w-64 h-64 m-auto' />
			<p className='text-space-cadet-300 font-medium'>
				Nothing to show here
			</p>
		</motion.div>
	);
};

export default NoData;
