import AuthLayout from '../components/authentication/AuthLayout';
import { ReactComponent as ForgotPasswordImage } from '../assets/svg/forgot-password.svg';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRight } from 'react-feather';
import { Link } from 'react-router-dom';
import ForgotPasswordSuccess from '../components/authentication/ForgotPasswordSuccess';
import LoaderIcon from '../components/ui/Loader/LoaderIcon';
import axios from 'axios';
import useToast from '../hooks/useToast';
import { handleError } from '../utils/ErrorHandler';
import ErrorMessage from '../components/ui/ErrorMessage';

const ForgotPassword = () => {
	const [buttonState, setButtonState] = useState({
		text: (
			<p className='flex gap-1 justify-center'>
				Continue
				<ArrowRight size={18} className='my-auto' />
			</p>
		),
		disabled: false,
	});

	const [mailSent, setmailSent] = useState({ display: false, email: '' });

	const toast = useToast();

	const {
		register,
		handleSubmit,
		reset,
		setError,
		formState: { errors },
	} = useForm();

	const validationContext = {
		email: {
			required: 'Email field cannot be empty',
			pattern: {
				value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
				message: 'Please enter a valid email address',
			},
		},
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
	};

	const submitHandler = (data) => {
		setButtonState({
			text: <LoaderIcon size={24} className='loader-icon-secondary' />,
			disabled: true,
		});
		axios
			.post('/api/auth/forgot-password/', data)
			.then((response) => {
				setmailSent({
					display: true,
					email: response.data?.data?.email,
				});
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

	return mailSent.display ? (
		<ForgotPasswordSuccess email={mailSent.email} />
	) : (
		<AuthLayout>
			<ForgotPasswordImage className='m-auto w-48 h-48 md:w-56 md:h-56' />
			<h1 className='text-3xl font-semibold'>Forgot Password</h1>
			<h2 className='font-light'>
				Please enter your details to continue
			</h2>
			<form onSubmit={handleSubmit(submitHandler)}>
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
					placeholder='Mobile Number'
					type='text'
					name='mobile_number'
					{...register(
						'mobile_number',
						validationContext.mobile_number
					)}
				/>
				{errors?.mobile_number && (
					<ErrorMessage errorMessage={errors.mobile_number.message} />
				)}
				<button
					title='Continue'
					disabled={buttonState.disabled}
					className='w-full md:w-4/5 mt-2 bg-independence-100 hover:bg-independence-200 active:ring-1 active:ring-independence-300 disabled:ring-0 disabled:hover:bg-independence-100 text-white py-2 px-4 rounded'
					type='submit'>
					{buttonState.text}
				</button>
			</form>
			<Link className='hover:underline text-xs' to='/login'>
				Take me back
			</Link>
		</AuthLayout>
	);
};
export default ForgotPassword;
