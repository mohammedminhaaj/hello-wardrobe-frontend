import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import Footer from './layouts/Footer';
import Main from './layouts/Main';
import Header from './layouts/Header';
import CartModal from './components/ui/CartModal';

function App() {
	return (
		<Fragment>
			{/* {createPortal(<CartModal />, document.getElementById('overlays'))} */}
			<Header />
			<Main />
			<Footer />
		</Fragment>
	);
}

export default App;
