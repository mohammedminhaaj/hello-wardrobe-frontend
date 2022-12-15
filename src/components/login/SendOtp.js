import { Fragment } from 'react';
import { ReactComponent as LoginImage } from '../../assets/svg/login.svg';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Loader } from 'react-feather';
import axios from 'axios';
import useToast from '../../hooks/useToast';

const SendOtp = (props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [buttonValue, setButtonValue] = useState('Send OTP');
	const [buttonDisabled, setButtonDisabled] = useState(false);
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
		setButtonValue(<Loader className='animate-spin mx-auto' />);
		setButtonDisabled(true);
		axios
			.post('/api/auth/send-otp/', data)
			.then((response) => {
				if (response.data.attemptsExceeded) {
					toast(response.data.details);
					setButtonValue('Send OTP');
					setButtonDisabled(false);
				} else {
					toast('OTP sent successfully');
					props.setVerifyScreen({
						show: true,
						number: data.mobileNumber,
					});
				}
			})
			.catch(() => {
				toast('An error occurred while sending the OTP');
				setButtonValue('Send OTP');
				setButtonDisabled(false);
			});
	};

	return (
		<Fragment>
			<LoginImage className='m-auto w-48 h-48 md:w-56 md:h-56' />
			<h1 className='text-3xl font-semibold'>Hello there,</h1>
			<h2 className='mt-5'>Please enter your mobile number</h2>
			<form onSubmit={handleSubmit(submitHandler)}>
				<input
					id='mobile-number'
					placeholder='Ex: 9999988888'
					type='text'
					name='mobileNumber'
					{...register('mobileNumber', validationContext)}
					className='bg-isabelline-200 focus:outline-isabelline-300 px-1 py-2 rounded w-full md:w-4/5 placeholder:text-h-gray-100 mt-2'
				/>
				{errors?.mobileNumber && (
					<div className='text-sm text-red-400'>
						{errors.mobileNumber.message}
					</div>
				)}
				<button
					title='Send OTP'
					disabled={buttonDisabled}
					type='submit'
					className='rounded text-white bg-independence-100 px-4 py-2 hover:bg-independence-200 active:ring-1 active:ring-independence-300 disabled:ring-0 disabled:hover:bg-independence-100 w-full md:w-4/5 mt-2'>
					{buttonValue}
				</button>
			</form>
		</Fragment>
	);
};

export default SendOtp;
