import { Fragment } from 'react';
import { ReactComponent as OtpLoginImage } from '../../assets/svg/otp-login.svg';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { ArrowLeft } from 'react-feather';
import axios from 'axios';
import useToast from '../../hooks/useToast';
import CredentialLogin from './CredentialLogin';
import VerifyOtp from './VerifyOtp';
import LoaderIcon from '../ui/Loader/LoaderIcon';
import { handleError } from '../../utils/ErrorHandler';
import ErrorMessage from '../ui/ErrorMessage';

const OtpLogin = (props) => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm();

	const [buttonState, setButtonState] = useState({
		text: <p className='flex justify-center'>Send OTP</p>,
		disabled: false,
	});

	const toast = useToast();

	const validationContext = {
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
	};

	const submitHandler = (data) => {
		setButtonState({
			text: <LoaderIcon size={24} className='loader-icon-secondary' />,
			disabled: true,
		});
		axios
			.post('/api/auth/login/otp/', data)
			.then((response) => {
				props.setLayout(
					<VerifyOtp
						setLayout={props.setLayout}
						number={data.mobile_number}
					/>
				);
				toast(response.data?.data?.message);
			})
			.catch((error) => {
				let errorContext = error.response.data?.error;

				handleError(errorContext, toast, setError);

				setButtonState({
					text: <p className='flex justify-center'>Send OTP</p>,
					disabled: false,
				});
			});
	};

	return (
		<Fragment>
			<OtpLoginImage className='m-auto w-48 h-48 md:w-56 md:h-56' />
			<h1 className='text-3xl font-semibold'>Login with OTP</h1>
			<h2 className='font-light'>Please enter your mobile number</h2>
			<form onSubmit={handleSubmit(submitHandler)}>
				<input
					placeholder='Mobile Number'
					type='text'
					name='mobile_number'
					{...register('mobile_number', validationContext)}
					className='w-full md:w-4/5 py-2 px-4 bg-isabelline-200 focus:outline-isabelline-300 rounded placeholder:text-h-gray-100 mt-2'
				/>
				{errors?.mobile_number && (
					<ErrorMessage errorMessage={errors.mobile_number.message} />
				)}
				<button
					title='Send OTP'
					disabled={buttonState.disabled}
					type='submit'
					className='rounded text-white bg-independence-100 px-4 py-2 hover:bg-independence-200 active:ring-1 active:ring-independence-300 disabled:ring-0 disabled:hover:bg-independence-100 w-full md:w-4/5 mt-2'>
					{buttonState.text}
				</button>
			</form>
			<button
				onClick={() => {
					props.setLayout(
						<CredentialLogin setLayout={props.setLayout} />
					);
				}}
				title='Go Back'
				className='w-full md:w-4/5 mt-2 bg-transparent border-h-gray-100 border-2 hover:bg-h-gray-100 hover:text-white active:ring-1 active:ring-h-gray-300 disabled:ring-0 text-h-gray-300 py-2 px-4 rounded'>
				<p className='flex justify-center gap-1'>
					<ArrowLeft size={18} className='mr-1 my-auto' />
					Back
				</p>
			</button>
		</Fragment>
	);
};

export default OtpLogin;
