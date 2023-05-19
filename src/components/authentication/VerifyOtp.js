import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowLeft, Check } from 'react-feather';
import axios from 'axios';
import { ReactComponent as MessageSent } from '../../assets/svg/message-sent.svg';
import useToast from '../../hooks/useToast';
import OtpTimer from './OtpTimer';
import { batch, useDispatch } from 'react-redux';
import OtpLogin from './OtpLogin';
import LoaderIcon from '../ui/Loader/LoaderIcon';
import { handleError } from '../../utils/ErrorHandler';
import LoginSuccess from '../../utils/LoginSuccess';
import { getCartWishlistData } from '../../utils/Common';
import ErrorMessage from '../ui/ErrorMessage';

const VerifyOtp = (props) => {
	const {
		register,
		handleSubmit,
		reset,
		setError,
		formState: { errors },
	} = useForm();

	const [buttonState, setButtonState] = useState({
		text: (
			<p className='flex gap-1 justify-center'>
				Verify
				<Check size={18} className='my-auto' />
			</p>
		),
		disabled: false,
	});

	const [allowResend, setAllowResend] = useState({
		loader: false,
		state: false,
	});

	const toast = useToast();
	const dispatch = useDispatch();

	const validationContext = {
		required: 'Please enter a valid OTP',
		minLength: {
			value: 6,
			message: 'Please enter a valid OTP',
		},
		maxLength: {
			value: 6,
			message: 'Please enter a valid OTP',
		},
	};

	const resendClickHandler = () => {
		setAllowResend((prev) => {
			return { ...prev, loader: true };
		});
		axios
			.post('/api/auth/login/otp/', { mobile_number: props.number })
			.then(() => {
				toast('OTP resent successfully');
				setAllowResend({ loader: false, state: false });
			})
			.catch((error) => {
				let errorContext = error.response.data?.error;

				toast(errorContext.message);

				if (errorContext.errors) {
					for (let key in errorContext.errors) {
						toast(errorContext.errors[key]);
					}
				}

				setAllowResend({ loader: false, state: true });
			});
	};

	const submitHandler = (data) => {
		setButtonState({
			text: <LoaderIcon size={24} className='loader-icon-secondary' />,
			disabled: true,
		});
		axios
			.post('/api/auth/login/otp/verify-otp/', {
				...data,
				...getCartWishlistData(),
				mobile_number: props.number,
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

				handleError(errorContext, toast, setError, ['mobile_number']);

				setButtonState({
					text: (
						<p className='flex gap-1 justify-center'>
							Verify
							<Check size={18} className='my-auto' />
						</p>
					),
					disabled: false,
				});
			});
	};

	return (
		<Fragment>
			<MessageSent className='m-auto w-48 h-48 md:w-56 md:h-56' />
			<h2>
				Please enter the one-time password sent to{' '}
				<span className='block font-semibold'>
					(+91) {props.number}
				</span>
			</h2>
			<form onSubmit={handleSubmit(submitHandler)}>
				<input
					placeholder='OTP'
					type='text'
					name='otp'
					{...register('otp', validationContext)}
					className='w-full md:w-4/5 py-2 px-4 bg-isabelline-200 focus:outline-isabelline-300 rounded placeholder:text-h-gray-100 mt-2'
				/>
				{errors?.otp && (
					<ErrorMessage errorMessage={errors.otp.message} />
				)}
				<div className='flex justify-center'>
					<div className='w-full md:w-4/5 flex justify-between font-thin text-sm'>
						{!allowResend.state && (
							<OtpTimer setAllowResend={setAllowResend} />
						)}
						<button
							onClick={resendClickHandler}
							type='button'
							disabled={!allowResend.state}
							className='ml-auto hover:underline hover:font-normal active:font-normal disabled:font-thin disabled:no-underline disabled:text-gray-400 flex justify-center gap-1'>
							{allowResend.loader && <LoaderIcon size={12} />}
							Resend OTP?
						</button>
					</div>
				</div>

				<button
					title='Verify OTP'
					disabled={buttonState.disabled}
					type='submit'
					className='rounded text-white bg-independence-100 px-4 py-2 hover:bg-independence-200 active:ring-1 active:ring-independence-300 disabled:ring-0 disabled:hover:bg-independence-100 w-full md:w-4/5 mt-2'>
					{buttonState.text}
				</button>
			</form>
			<button
				onClick={() => {
					props.setLayout(<OtpLogin setLayout={props.setLayout} />);
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

export default VerifyOtp;
