import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import CartSummary from '../components/checkout-form/CartSummary';
import ContactDetailsForm from '../components/checkout-form/ContactDetailsForm';
import PaymentForm from '../components/checkout-form/PaymentForm';
import DeliveryLocationForm from '../components/checkout-form/DeliveryLocationForm';

const CheckoutForm = () => {
	const [showSummary, setShowSummary] = useState(false);
	const [checkoutForm, setCheckoutForm] = useState('contact_details');

	const summaryClickHandler = () => {
		setShowSummary((previous) => !previous);
	};

	const RenderCheckoutForm = (currentForm) => {
		switch (currentForm) {
			case 'contact_details':
				return (
					<ContactDetailsForm
						setCheckoutFormHandler={setCheckoutForm}
					/>
				);
			case 'delivery_location':
				return (
					<DeliveryLocationForm
						setCheckoutFormHandler={setCheckoutForm}
					/>
				);
			case 'payment':
				return <PaymentForm />;
			default:
				return <p>No form to render!</p>;
		}
	};

	return (
		<div className='grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-x-6'>
			<div className='md:order-2'>
				<button
					onClick={summaryClickHandler}
					className='md:hidden flex justify-between text-isabelline-100 rounded w-full px-2 py-3 bg-silver-pink-100 hover:bg-silver-pink-200 active:ring-1 active:ring-silver-pink-300'>
					<p>Order Summary</p>
					{showSummary ? (
						<ChevronUp size={16} className='my-auto' />
					) : (
						<ChevronDown size={16} className='my-auto' />
					)}
				</button>
				<div
					className={` ${
						showSummary ? '' : 'hidden'
					} md:block lg:block xl:block`}>
					<CartSummary />
				</div>
			</div>
			<div className='col-span-2 md:order-1 md:border-r-2'>
				<h1 className='text-lg font-bold'>Checkout</h1>
				<div className='flex gap-3 py-4 px-2 md:pr-5'>
					<div
						className={`md:basis-1/3 border-t-4 ${
							[
								'contact_details',
								'delivery_location',
								'payment',
							].includes(checkoutForm)
								? 'border-silver-pink-300'
								: ''
						} ${
							checkoutForm === 'contact_details'
								? 'basis-3/5'
								: 'basis-1/5'
						}`}>
						<p
							className={`${
								[
									'contact_details',
									'delivery_location',
									'payment',
								].includes(checkoutForm)
									? 'text-silver-pink-300'
									: ''
							}`}>
							Step 1
						</p>
						<p
							className={`${
								checkoutForm === 'contact_details'
									? ''
									: 'hidden'
							} md:block lg:block xl:block font-thin`}>
							Contact Information
						</p>
					</div>
					<div
						className={`md:basis-1/3 border-t-4 ${
							['delivery_location', 'payment'].includes(
								checkoutForm
							)
								? 'border-silver-pink-300'
								: ''
						} ${
							checkoutForm === 'delivery_location'
								? 'basis-3/5'
								: 'basis-1/5'
						}`}>
						<p
							className={`${
								['delivery_location', 'payment'].includes(
									checkoutForm
								)
									? 'text-silver-pink-300'
									: ''
							}`}>
							Step 2
						</p>
						<p
							className={`${
								checkoutForm === 'delivery_location'
									? ''
									: 'hidden'
							} md:block lg:block xl:block font-thin`}>
							Delivery Location
						</p>
					</div>
					<div
						className={`md:basis-1/3 border-t-4 ${
							checkoutForm === 'payment'
								? 'border-silver-pink-300 basis-3/5'
								: 'basis-1/5'
						}`}>
						<p
							className={`${
								checkoutForm === 'payment'
									? 'text-silver-pink-300'
									: ''
							}`}>
							Step 3
						</p>
						<p
							className={`${
								checkoutForm === 'payment' ? '' : 'hidden'
							} md:block lg:block xl:block font-thin`}>
							Payment
						</p>
					</div>
				</div>
				<div className='px-2 py-4 md:pr-5'>
					{RenderCheckoutForm(checkoutForm)}
				</div>
			</div>
		</div>
	);
};

export default CheckoutForm;
