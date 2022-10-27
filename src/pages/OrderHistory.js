import { ReactComponent as OrderChecklist } from '../assets/images/order-history.svg';
import OrderHistoryCard from '../components/order-history/OrderHistoryCard';

const OrderHistory = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
			<OrderChecklist className='w-64 h-64 m-auto' />
			<OrderHistoryCard />
		</div>
	);
};

export default OrderHistory;
