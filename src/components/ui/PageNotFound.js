import { ReactComponent as NotFound } from '../../assets/svg/page-not-found.svg';
import { motion } from 'framer-motion';
import { pageVariant } from '../../utils/Common';

const PageNotFound = () => {
	return (
		<motion.section
			initial='pageHidden'
			animate='pageVisible'
			exit='pageExit'
			variants={pageVariant}
			className='text-center'>
			<NotFound className='w-64 h-64 m-auto' />
			<p className='text-space-cadet-300 font-medium'>
				The page you are looking for is missing
			</p>
		</motion.section>
	);
};

export default PageNotFound;
