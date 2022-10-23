import { Fragment } from 'react';
import './App.css';
import Footer from './layouts/Footer';
import Main from './layouts/Main';
import NavigationBar from './layouts/NavigationBar';

function App() {
	return (
		<Fragment>
			<NavigationBar />
			<Main />
			<Footer />
		</Fragment>
	);
}

export default App;
