import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { authActions } from '../../store/auth-slice';

const LoginLink = (props) => {
	const location = useLocation();
	const dispatch = useDispatch();
	return (
		<Link
			onClick={() => {
				dispatch(authActions.setReferrer(location.pathname));
			}}
			className={props.className}
			to='/login'>
			{props.children}
		</Link>
	);
};

export default LoginLink;
