// import CheckoutForm from '../pages/CheckoutForm';
// import OrderHistory from '../pages/OrderHistory';
// import OrderSummary from '../pages/OrderSummary';
// import Overview from '../pages/Overview';
import LoadingScreen from '../components/ui/LoadingScreen';
import Shop from '../pages/Shop';

const Main = () => {
	return (
		<main>
			<h2 className='sr-only'>Body section</h2>
			<div className='main-container'>
				<Shop />
			</div>
		</main>
	);
};

export default Main;
