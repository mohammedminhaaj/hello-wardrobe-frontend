import { Fragment, useState } from 'react';
import { ReactComponent as LoginImage } from '../../assets/svg/login.svg';
import { ArrowRight, Send } from 'react-feather';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import OtpLogin from './OtpLogin';
import useToast from '../../hooks/useToast';
import axios from 'axios';
import LoaderIcon from '../ui/Loader/LoaderIcon';
import { batch, useDispatch } from 'react-redux';
import { handleError } from '../../utils/ErrorHandler';
import LoginSuccess from '../../utils/LoginSuccess';
import { getCartWishlistData } from '../../utils/Common';
import ErrorMessage from '../ui/ErrorMessage';

const CredentialLogin = (props) => {
	const [buttonState, setButtonState] = useState({
		text: (
			<p className='flex gap-1 justify-center'>
				Continue
				<ArrowRight size={18} className='my-auto' />
			</p>
		),
		disabled: false,
	});

	const {
		register,
		handleSubmit,
		reset,
		setError,
		formState: { errors },
	} = useForm();

	const dispatch = useDispatch();
	const toast = useToast();

	const validationContext = {
		email_number: {
			required: 'Mobile or Email field cannot be empty',
		},
		password: {
			required: 'Password field cannot be empty',
		},
	};

	const submitHandler = (data) => {
		setButtonState({
			text: <LoaderIcon size={24} className='loader-icon-secondary' />,
			disabled: true,
		});
		axios
			.post('/api/auth/login/credential/', {
				...data,
				...getCartWishlistData(),
			})
			.then((response) => {
				let responseData = response.data ?? {};
				responseData.isAuthenticated = true;
				LoginSuccess(batch, dispatch, responseData);
				toast(response.data?.message);
			})
			.catch((error) => {
				let errorContext = error.response.data?.error;
				reset();

				handleError(errorContext, toast, setError);

				setButtonState({
					text: (
						<p className='flex gap-1 justify-center'>
							Continue
							<ArrowRight size={18} className='my-auto' />
						</p>
					),
					disabled: false,
				});
			});
	};

	return (
		<Fragment>
			<LoginImage className='m-auto w-48 h-48 md:w-56 md:h-56' />
			<h1 className='text-3xl font-semibold'>Hello there,</h1>
			<h2 className='font-light'>
				Please enter your credentials to continue
			</h2>

			<form onSubmit={handleSubmit(submitHandler)}>
				<input
					placeholder='Mobile Number or Email'
					type='text'
					name='email_number'
					{...register(
						'email_number',
						validationContext.email_number
					)}
					className='w-full md:w-4/5 py-2 px-4 bg-isabelline-200 focus:outline-isabelline-300 rounded placeholder:text-h-gray-100 mt-2'
				/>
				{errors?.email_number && (
					<ErrorMessage errorMessage={errors.email_number.message} />
				)}
				<input
					className='w-full md:w-4/5 py-2 px-4 bg-isabelline-200 focus:outline-isabelline-300 rounded placeholder:text-h-gray-100 mt-2'
					placeholder='Password'
					type='password'
					name='password'
					{...register('password', validationContext.password)}
				/>
				{errors?.password && (
					<ErrorMessage errorMessage={errors.password.message} />
				)}
				<button
					title='Continue'
					disabled={buttonState.disabled}
					className='w-full md:w-4/5 mt-2 bg-independence-100 hover:bg-independence-200 active:ring-1 active:ring-independence-300 disabled:ring-0 disabled:hover:bg-independence-100 text-white py-2 px-4 rounded'
					type='submit'>
					{buttonState.text}
				</button>
			</form>
			<div className='flex justify-between md:justify-around text-xs mt-2'>
				<Link className='hover:underline' to='/forgot-password'>
					Forgot password?
				</Link>
				<Link className='hover:underline' to='/sign-up'>
					Don't have an account?
				</Link>
			</div>
			<div className='flex items-center my-3'>
				<div className='flex-grow border-t border-h-gray-300'></div>
				<p className='px-4 text-h-gray-300'>OR</p>
				<div className='flex-grow border-t border-h-gray-300'></div>
			</div>
			<button
				onClick={() => {
					props.setLayout(<OtpLogin setLayout={props.setLayout} />);
				}}
				title='Login using OTP'
				className='w-full md:w-4/5 mt-1 bg-independence-100 hover:bg-independence-200 active:ring-1 active:ring-independence-300 disabled:ring-0 disabled:hover:bg-independence-100 text-white py-2 px-4 rounded'
				type='button'>
				<p className='flex justify-center'>
					Login With OTP
					<Send size={18} className='ml-1 my-auto' />
				</p>
			</button>
		</Fragment>
	);
};

export default CredentialLogin;
