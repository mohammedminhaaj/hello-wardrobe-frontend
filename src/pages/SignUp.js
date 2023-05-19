import AuthLayout from '../components/authentication/AuthLayout';
import { ReactComponent as SignUpImage } from '../assets/svg/sign-up.svg';
import { ArrowRight } from 'react-feather';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import useToast from '../hooks/useToast';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LoaderIcon from '../components/ui/Loader/LoaderIcon';
import { batch, useDispatch } from 'react-redux';
import { handleError } from '../utils/ErrorHandler';
import LoginSuccess from '../utils/LoginSuccess';
import { getCartWishlistData } from '../utils/Common';
import ErrorMessage from '../components/ui/ErrorMessage';

const SignUp = () => {
	const {
		register,
		watch,
		handleSubmit,
		reset,
		setError,
		formState: { errors },
	} = useForm();

	const dispatch = useDispatch();

	const [buttonState, setButtonState] = useState({
		text: (
			<p className='flex gap-1 justify-center'>
				Join Now
				<ArrowRight size={18} className='my-auto' />
			</p>
		),
		disabled: false,
	});

	const toast = useToast();

	const validationContext = {
		mobile_number: {
			required: 'Mobile number field cannot be empty',
			minLength: {
				value: 10,
				message: 'Please enter a valid mobile number',
			},
			maxLength: {
				value: 10,
				message: 'Please enter a valid mobile number',
			},
			pattern: {
				value: /^[6-9]\d{9}$/,
				message: 'Please enter a valid mobile number',
			},
		},
		email: {
			required: 'Email field cannot be empty',
			pattern: {
				value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
				message: 'Please enter a valid email address',
			},
		},
		password: {
			required: 'Password field cannot be empty',
			minLength: {
				value: 6,
				message: 'Password must contain atleast 6 characters',
			},
		},
		confirm_password: {
			required: 'Confirm password field cannot be empty',
			minLength: {
				value: 6,
				message: 'Password must contain atleast 6 characters',
			},
			validate: (value) =>
				watch('password') === value || "Passwords don't match",
		},
	};

	const submitHandler = (data) => {
		setButtonState({
			text: <LoaderIcon size={24} className='loader-icon-secondary' />,
			disabled: true,
		});
		axios
			.post('/api/auth/sign-up/', {
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

				reset({
					password: '',
					confirm_password: '',
				});

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
		<AuthLayout>
			<SignUpImage className='m-auto w-48 h-48 md:w-56 md:h-56' />
			<h1 className='text-3xl font-semibold'>Create Account</h1>
			<h2 className='font-light'>Please enter your details</h2>
			<form onSubmit={handleSubmit(submitHandler)}>
				<input
					placeholder='Mobile Number'
					type='text'
					name='mobile_number'
					{...register(
						'mobile_number',
						validationContext.mobile_number
					)}
					className='w-full md:w-4/5 py-2 px-4 bg-isabelline-200 focus:outline-isabelline-300 rounded placeholder:text-h-gray-100 mt-2'
				/>
				{errors?.mobile_number && (
					<ErrorMessage errorMessage={errors.mobile_number.message} />
				)}
				<input
					placeholder='Email'
					type='email'
					name='email'
					{...register('email', validationContext.email)}
					className='w-full md:w-4/5 py-2 px-4 bg-isabelline-200 focus:outline-isabelline-300 rounded placeholder:text-h-gray-100 mt-2'
				/>
				{errors?.email && (
					<ErrorMessage errorMessage={errors.email.message} />
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
				<input
					className='w-full md:w-4/5 py-2 px-4 bg-isabelline-200 focus:outline-isabelline-300 rounded placeholder:text-h-gray-100 mt-2'
					placeholder='Confirm Password'
					type='password'
					name='confirm_password'
					{...register(
						'confirm_password',
						validationContext.confirm_password
					)}
				/>
				{errors?.confirm_password && (
					<ErrorMessage
						errorMessage={errors.confirm_password.message}
					/>
				)}
				<button
					title='Continue'
					disabled={buttonState.disabled}
					className='w-full md:w-4/5 mt-2 bg-independence-100 hover:bg-independence-200 active:ring-1 active:ring-independence-300 disabled:ring-0 disabled:hover:bg-independence-100 text-white py-2 px-4 rounded'
					type='submit'>
					{buttonState.text}
				</button>
			</form>
			<Link to='/login' className='hover:underline text-xs'>
				Already have an account?
			</Link>
		</AuthLayout>
	);
};

export default SignUp;
