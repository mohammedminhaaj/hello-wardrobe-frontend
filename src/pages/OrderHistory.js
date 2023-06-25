import { ReactComponent as OrderChecklist } from '../assets/svg/order-history.svg';
import OrderHistoryCard from '../components/order-history/OrderHistoryCard';
import { motion } from 'framer-motion';
import { pageVariant } from '../utils/Common';

const OrderHistory = () => {
	return (
		<motion.section
			initial='pageHidden'
			animate='pageVisible'
			exit='pageExit'
			variants={pageVariant}
			className='grid grid-cols-1 md:grid-cols-2 gap-5'>
			<OrderChecklist className='w-64 h-64 m-auto' />
			<OrderHistoryCard />
		</motion.section>
	);
};

export default OrderHistory;
