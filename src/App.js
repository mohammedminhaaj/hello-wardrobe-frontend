import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { Route, Routes } from 'react-router-dom';
import Footer from './layouts/Footer';
import Main from './layouts/Main';
import Header from './layouts/Header';
import CartModal from './components/cart/CartModal';
import { useSelector } from 'react-redux';
import Toast from './components/ui/Toast';
import Login from './pages/Login';

function App() {
	const cartIsVisible = useSelector((state) => state.cart.showCart);
	return (
		<Fragment>
			{cartIsVisible &&
				createPortal(
					<CartModal />,
					document.getElementById('overlays')
				)}
			{createPortal(<Toast />, document.getElementById('overlays'))}
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route
					path='*'
					element={
						<Fragment>
							<Header />
							<Main />
							<Footer />
						</Fragment>
					}
				/>
			</Routes>
		</Fragment>
	);
}

export default App;
