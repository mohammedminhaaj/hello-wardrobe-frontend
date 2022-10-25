import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import CartSummary from '../components/checkout-form/CartSummary';
import ContactDetailsForm from '../components/checkout-form/ContactDetailsForm';
import PaymentForm from '../components/checkout-form/PaymentForm';
import ShippingInformationForm from '../components/checkout-form/ShippingInformationForm';

const RenderCheckoutForm = (currentForm) => {
	switch (currentForm) {
		case 'contact_details':
			return <ContactDetailsForm />;
		case 'shipping_details':
			return <ShippingInformationForm />;
		case 'payment':
			return <PaymentForm />;
		default:
			return <p>No form to render!</p>;
	}
};

const CheckoutForm = () => {
	const [showSummary, setShowSummary] = useState(false);
	const [checkoutForm, setCheckoutForm] = useState('contact_details');

	const summaryClickHandler = () => {
		setShowSummary((previous) => !previous);
	};

	const nextClickHandler = () => {
		if (checkoutForm === 'contact_details')
			setCheckoutForm('shipping_details');
		else if (checkoutForm === 'shipping_details')
			setCheckoutForm('payment');
	};

	const previousClickHandler = () => {
		if (checkoutForm === 'payment') setCheckoutForm('shipping_details');
		else if (checkoutForm === 'shipping_details')
			setCheckoutForm('contact_details');
	};

	return (
		<div className='mx-auto py-20 px-4 sm:py-24 sm:px-8 lg:max-w-7xl lg:px-8'>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-x-6'>
				<div className='md:order-2'>
					<button
						onClick={summaryClickHandler}
						className='md:hidden flex justify-between rounded w-full px-2 py-3 bg-stone-200 hover:bg-stone-300 active:ring-1 active:ring-stone-400'>
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
					<div className='grid grid-cols-3 gap-3 py-4 px-2 md:pr-5'>
						<div
							className={`border-t-4 ${
								[
									'contact_details',
									'shipping_details',
									'payment',
								].includes(checkoutForm)
									? 'border-stone-600'
									: ''
							}`}>
							<p
								className={`${
									[
										'contact_details',
										'shipping_details',
										'payment',
									].includes(checkoutForm)
										? 'border-stone-600'
										: 'text-gray-500'
								}`}>
								Step 1
							</p>
							<p className='font-thin'>Contact Information</p>
						</div>
						<div
							className={`border-t-4 ${
								['shipping_details', 'payment'].includes(
									checkoutForm
								)
									? 'border-stone-600'
									: ''
							}`}>
							<p
								className={`${
									['shipping_details', 'payment'].includes(
										checkoutForm
									)
										? 'border-stone-600'
										: 'text-gray-500'
								}`}>
								Step 2
							</p>
							<p className='font-thin'>Shipping Information</p>
						</div>
						<div
							className={`border-t-4 ${
								checkoutForm === 'payment'
									? 'border-stone-600'
									: ''
							}`}>
							<p
								className={`${
									checkoutForm === 'payment'
										? 'border-stone-600'
										: 'text-gray-500'
								}`}>
								Step 3
							</p>
							<p className='font-thin'>Payment</p>
						</div>
					</div>
					<div className='px-2 py-4 md:pr-5'>
						{RenderCheckoutForm(checkoutForm)}
						<div className='flex flex-row-reverse mt-5 gap-3'>
							{checkoutForm !== 'payment' ? (
								<button
									onClick={nextClickHandler}
									type='button'
									className='bg-stone-400 hover:bg-stone-500 focus:outline-none active:ring-1 active:ring-stone-500 rounded px-3 py-1'>
									Next
								</button>
							) : (
								<button
									type='button'
									className='bg-stone-400 hover:text-white hover:bg-stone-500 focus:outline-none active:ring-1 active:ring-stone-500 rounded px-3 py-1'>
									Confirm Payment
								</button>
							)}
							{checkoutForm !== 'contact_details' && (
								<button
									onClick={previousClickHandler}
									type='button'
									className='bg-stone-100 hover:bg-stone-200 focus:outline-none active:ring-1 active:ring-stone-300 rounded px-3 py-1'>
									Previous
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckoutForm;
