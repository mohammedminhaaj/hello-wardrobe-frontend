import axios from 'axios';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useToast from '../hooks/useToast';
import { authActions } from '../store/auth-slice';
import LoginLink from '../components/authentication/LoginLink';

const Profile = () => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const dispatch = useDispatch();
	const toast = useToast();
	const logoutHandler = () => {
		axios
			.post('/api/auth/logout/')
			.then(() => dispatch(authActions.logout()))
			.catch(() => toast('Something went wrong'));
	};
	return isAuthenticated ? (
		<Fragment>
			<h1>User is Authenticated</h1>
			<button
				onClick={logoutHandler}
				type='button'
				className='primary-button'>
				Logout
			</button>
		</Fragment>
	) : (
		<Fragment>
			<h1>User is not Authenticated</h1>
			<LoginLink className='rounded bg-independence-100 text-white'>Login button</LoginLink>
		</Fragment>
	);
};

export default Profile;
