import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import Footer from './layouts/Footer';
import Main from './layouts/Main';
import Header from './layouts/Header';
import CartModal from './components/cart/CartModal';
import { useSelector } from 'react-redux';
import Toast from './components/ui/Toast';

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
			<Header />
			<Main />
			<Footer />
		</Fragment>
	);
}

export default App;
