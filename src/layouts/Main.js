import CheckoutForm from '../pages/CheckoutForm';
import OrderHistory from '../pages/OrderHistory';
import OrderSummary from '../pages/OrderSummary';
import Overview from '../pages/Overview';
import Shop from '../pages/Shop';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import PageNotFound from '../components/ui/PageNotFound';
import { useSelector } from 'react-redux';
import Profile from '../pages/Profile';
import { AnimatePresence } from 'framer-motion';

const Main = () => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const location = useLocation();
	return (
		<main>
			<h2 className='sr-only'>Body section</h2>
			<div className='main-container'>
				<AnimatePresence mode='wait'>
					<Routes key={location.pathname} location={location}>
						<Route path='/' element={<Navigate to='/shop' />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/shop' element={<Shop />} />
						<Route
							path='/shop/:productName'
							element={<Overview />}
						/>
						<Route
							path='/order-summary'
							element={<OrderSummary />}
						/>
						<Route
							path='/order-history'
							element={<OrderHistory />}
						/>

						<Route
							path='/checkout'
							element={
								!cartItems.length ? (
									<Navigate to='/shop' />
								) : (
									<CheckoutForm />
								)
							}
						/>
						<Route path='*' element={<PageNotFound />} />
					</Routes>
				</AnimatePresence>
			</div>
		</main>
	);
};

export default Main;
