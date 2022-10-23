import { Fragment } from 'react';
import './App.css';
import Footer from './layouts/Footer';
import Main from './layouts/Main';
import Header from './layouts/Header';

function App() {
	return (
		<Fragment>
			<Header />
			<Main />
			<Footer />
		</Fragment>
	);
}

export default App;
