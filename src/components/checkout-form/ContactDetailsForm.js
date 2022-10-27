import { useForm } from 'react-hook-form';

const ContactDetailsForm = (props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const submitHandler = () => {
		props.setCheckoutFormHandler('delivery_location');
	};

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

	return (
		<form onSubmit={handleSubmit(submitHandler)}>
			<label
				htmlFor='mobile-number'
				className="after:content-['*'] after:ml-0.5 after:text-red-500">
				Mobile
			</label>
			<br />
			<input
				id='mobile-number'
				type='text'
				className='bg-isabelline-100 focus:outline-isabelline-300 px-1 py-2 rounded w-full md:w-1/2'
				name='mobileNumber'
				{...register('mobileNumber', validationContext)}
			/>
			{errors?.mobileNumber && (
				<div className='text-sm text-red-400'>
					{errors.mobileNumber.message}
				</div>
			)}
			<br />
			<br />
			<label htmlFor='email' className='mt-2'>
				Email (Optional)
			</label>
			<br />
			<input
				id='email'
				type='email'
				className='bg-isabelline-100 focus:outline-isabelline-300 px-1 py-2 rounded w-full md:w-1/2'
				name='email'
				{...register('email')}
			/>
			{errors?.email && (
				<div className='text-sm text-red-400'>
					{errors.email.message}
				</div>
			)}
			<div className='mt-5 flex flex-row-reverse'>
				<button type='submit' className='primary-button'>
					Next
				</button>
			</div>
		</form>
	);
};

export default ContactDetailsForm;
