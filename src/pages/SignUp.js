import AuthLayout, {
	authContainer,
	authItems,
} from '../components/authentication/AuthLayout';
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
import { motion } from 'framer-motion';

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
};

const SignUp = () => {
	const {
		register,
		watch,
		handleSubmit,
		resetField,
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

	validationContext.confirm_password = {
		required: 'Confirm password field cannot be empty',
		minLength: {
			value: 6,
			message: 'Password must contain atleast 6 characters',
		},
		validate: (value) =>
			watch('password') === value || "Passwords don't match",
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

				for (let fields of ['password', 'confirm_password'])
					resetField(fields);
			});
	};

	return (
		<AuthLayout>
			<motion.div
				initial='hidden'
				animate='show'
				variants={authContainer}>
				<motion.figure variants={authItems}>
					<SignUpImage className='m-auto w-48 h-48 md:w-56 md:h-56' />
				</motion.figure>

				<motion.h1
					variants={authItems}
					className='text-3xl font-semibold'>
					Create Account
				</motion.h1>
				<motion.h2 variants={authItems} className='font-light'>
					Please enter your details
				</motion.h2>
				<form onSubmit={handleSubmit(submitHandler)}>
					<motion.input
						whileFocus={{ scaleX: 1.05 }}
						variants={authItems}
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
						<ErrorMessage
							errorMessage={errors.mobile_number.message}
						/>
					)}
					<motion.input
						whileFocus={{ scaleX: 1.05 }}
						variants={authItems}
						placeholder='Email'
						type='email'
						name='email'
						{...register('email', validationContext.email)}
						className='w-full md:w-4/5 py-2 px-4 bg-isabelline-200 focus:outline-isabelline-300 rounded placeholder:text-h-gray-100 mt-2'
					/>
					{errors?.email && (
						<ErrorMessage errorMessage={errors.email.message} />
					)}
					<motion.input
						whileFocus={{ scaleX: 1.05 }}
						variants={authItems}
						className='w-full md:w-4/5 py-2 px-4 bg-isabelline-200 focus:outline-isabelline-300 rounded placeholder:text-h-gray-100 mt-2'
						placeholder='Password'
						type='password'
						name='password'
						{...register('password', validationContext.password)}
					/>
					{errors?.password && (
						<ErrorMessage errorMessage={errors.password.message} />
					)}
					<motion.input
						whileFocus={{ scaleX: 1.05 }}
						variants={authItems}
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
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						whileFocus={{ scale: 1.05 }}
						variants={authItems}
						title='Continue'
						disabled={buttonState.disabled}
						className='w-full md:w-4/5 mt-2 bg-independence-100 hover:bg-independence-200 active:ring-1 active:ring-independence-300 disabled:ring-0 disabled:hover:bg-independence-100 focus:outline-1 focus:outline-independence-300 text-white py-2 px-4 rounded'
						type='submit'>
						{buttonState.text}
					</motion.button>
				</form>
				<motion.div
					tabIndex='-1'
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					variants={authItems}>
					<Link to='/login' className='hover:underline text-xs'>
						Already have an account?
					</Link>
				</motion.div>
			</motion.div>
		</AuthLayout>
	);
};

export default SignUp;
