import { Fragment, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Route, Routes, Navigate } from 'react-router-dom';
import Footer from './layouts/Footer';
import Main from './layouts/Main';
import Header from './layouts/Header';
import CartModal from './components/cart/CartModal';
import { batch, useDispatch, useSelector } from 'react-redux';
import Toast from './components/ui/Toast';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import {
	dispatchCommon,
	getCartWishlistData,
	protectedInstance,
} from './utils/Common';
import { commonActions } from './store/common-slice';
import Loading from './components/ui/Loader/Loading';

function App() {
	const cartIsVisible = useSelector((state) => state.cart.showCart);
	const appLoaded = useSelector((state) => state.common.appLoaded);
	const { isAuthenticated, loginReferrer } = useSelector(
		(state) => state.auth
	);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!appLoaded) {
			protectedInstance
				.post('/api/common/get-state/', {
					...getCartWishlistData(),
				})
				.then((response) => {
					batch(() => {
						dispatch(commonActions.setAppLoaded(true));
						dispatchCommon(dispatch, response.data?.data ?? {});
					});
				})
				.catch(() => {
					dispatch(commonActions.setAppLoaded(true));
				});
		}
	}, [appLoaded, dispatch]);

	return appLoaded ? (
		<Fragment>
			{cartIsVisible &&
				createPortal(
					<CartModal />,
					document.getElementById('overlays')
				)}
			{createPortal(<Toast />, document.getElementById('overlays'))}
			<Routes>
				<Route
					path='/login'
					element={
						isAuthenticated ? (
							<Navigate to={loginReferrer} />
						) : (
							<Login />
						)
					}
				/>
				<Route
					path='/sign-up'
					element={
						isAuthenticated ? (
							<Navigate to={loginReferrer} />
						) : (
							<SignUp />
						)
					}
				/>
				<Route
					path='/forgot-password'
					element={
						isAuthenticated ? (
							<Navigate to={loginReferrer} />
						) : (
							<ForgotPassword />
						)
					}
				/>
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
	) : (
		<section className='flex justify-center items-center h-screen w-screen'>
			<div>
				<Loading />
			</div>
		</section>
	);
}

export default App;
