import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader } from 'react-feather';
import axios from 'axios';
import { ReactComponent as MessageSent } from '../../assets/svg/message-sent.svg';
import useToast from '../../hooks/useToast';
import OtpTimer from './OtpTimer';

const VerifyOtp = (props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [buttonValue, setButtonValue] = useState('Verify');
	const [buttonDisabled, setButtonDisabled] = useState(false);
	const [attempts, setAttempts] = useState(0);
	const [allowResend, setAllowResend] = useState(true);
	const toast = useToast();

	const validationContext = {
		required: 'Please enter a valid OTP',
	};

	const resendClickHandler = () => {
		axios
			.post('/api/auth/send-otp/', { mobileNumber: props.mobileNumber })
			.then(() => {
				toast('OTP resent successfully');
				setAttempts((previous) => previous + 1);
				if (attempts >= 1) setAllowResend(false);
			})
			.catch(() => {
				toast('An error occurred while sending the OTP');
			});
	};

	const submitHandler = (data) => {
		setButtonValue(<Loader className='animate-spin mx-auto' />);
		setButtonDisabled(true);
		axios
			.post('/api/auth/verify-otp/', {
				...data,
				mobileNumber: props.mobileNumber,
			})
			.then((response) => {
				toast(response.data.details);
			})
			.catch((error) => {
				toast(error.response.data.details);
				setButtonValue('Verify');
				setButtonDisabled(false);
			});
	};

	return (
		<Fragment>
			<MessageSent className='m-auto w-48 h-48 md:w-56 md:h-56' />
			<h2>
				Please enter the one-time password sent to{' '}
				<span className='block'>(+91) {props.mobileNumber}</span>
			</h2>
			<form onSubmit={handleSubmit(submitHandler)}>
				<input
					id='verify-otp'
					placeholder='Ex: 123456'
					type='text'
					name='verifyOtp'
					{...register('verifyOtp', validationContext)}
					className='bg-isabelline-200 focus:outline-isabelline-300 px-1 py-2 rounded w-full md:w-4/5 placeholder:text-h-gray-100 mt-2'
				/>
				{errors?.verifyOtp && (
					<div className='text-sm text-red-400'>
						{errors.verifyOtp.message}
					</div>
				)}
				<div className='flex justify-center'>
					<div className='w-full md:w-4/5 flex justify-between font-thin text-sm'>
						{attempts > 1 && !allowResend && (
							<OtpTimer setAllowResend={setAllowResend} />
						)}
						<button
							onClick={resendClickHandler}
							type='button'
							disabled={!allowResend}
							className='ml-auto hover:underline hover:font-normal active:font-normal disabled:font-thin disabled:no-underline disabled:text-gray-400'>
							Resend OTP?
						</button>
					</div>
				</div>

				<button
					title='Verify OTP'
					disabled={buttonDisabled}
					type='submit'
					className='rounded text-white bg-independence-100 px-4 py-2 hover:bg-independence-200 active:ring-1 active:ring-independence-300 disabled:ring-0 disabled:hover:bg-independence-100 w-full md:w-4/5 mt-2'>
					{buttonValue}
				</button>
			</form>
		</Fragment>
	);
};

export default VerifyOtp;
