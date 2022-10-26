import { useReducer, useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import CartSummary from '../components/checkout-form/CartSummary';
import ContactDetailsForm from '../components/checkout-form/ContactDetailsForm';
import PaymentForm from '../components/checkout-form/PaymentForm';
import ShippingInformationForm from '../components/checkout-form/ShippingInformationForm';

const CheckoutForm = () => {
	const [showSummary, setShowSummary] = useState(false);
	const [state, dispatch] = useReducer(checkoutFormReducer, {
		checkoutForm: 'contact_details',
	});

	function checkoutFormReducer(state, action) {
		switch (action.type) {
			case 'next':
				if (state.checkoutForm === 'contact_details')
					return { checkoutForm: 'shipping_details' };
				else if (state.checkoutForm === 'shipping_details')
					return { checkoutForm: 'payment' };
				break;
			case 'previous':
				if (state.checkoutForm === 'payment')
					return { checkoutForm: 'shipping_details' };
				else if (state.checkoutForm === 'shipping_details')
					return { checkoutForm: 'contact_details' };
				break;
			default:
				throw new Error('No reducer action types matched!');
		}
	}

	const summaryClickHandler = () => {
		setShowSummary((previous) => !previous);
	};

	const RenderCheckoutForm = (currentForm) => {
		switch (currentForm) {
			case 'contact_details':
				return <ContactDetailsForm dispatchMethod={dispatch} />;
			case 'shipping_details':
				return <ShippingInformationForm />;
			case 'payment':
				return <PaymentForm />;
			default:
				return <p>No form to render!</p>;
		}
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
					<div className='flex gap-3 py-4 px-2 md:pr-5'>
						<div
							className={`md:basis-1/3 border-t-4 ${
								[
									'contact_details',
									'shipping_details',
									'payment',
								].includes(state.checkoutForm)
									? 'border-stone-600'
									: ''
							} ${
								state.checkoutForm === 'contact_details'
									? 'basis-3/5'
									: 'basis-1/5'
							}`}>
							<p
								className={`${
									[
										'contact_details',
										'shipping_details',
										'payment',
									].includes(state.checkoutForm)
										? 'border-stone-600'
										: 'text-gray-500'
								}`}>
								Step 1
							</p>
							<p
								className={`${
									state.checkoutForm === 'contact_details'
										? ''
										: 'hidden'
								} md:block lg:block xl:block font-thin`}>
								Contact Information
							</p>
						</div>
						<div
							className={`md:basis-1/3 border-t-4 ${
								['shipping_details', 'payment'].includes(
									state.checkoutForm
								)
									? 'border-stone-600'
									: ''
							} ${
								state.checkoutForm === 'shipping_details'
									? 'basis-3/5'
									: 'basis-1/5'
							}`}>
							<p
								className={`${
									['shipping_details', 'payment'].includes(
										state.checkoutForm
									)
										? 'border-stone-600'
										: 'text-gray-500'
								}`}>
								Step 2
							</p>
							<p
								className={`${
									state.checkoutForm === 'shipping_details'
										? ''
										: 'hidden'
								} md:block lg:block xl:block font-thin`}>
								Shipping Information
							</p>
						</div>
						<div
							className={`md:basis-1/3 border-t-4 ${
								state.checkoutForm === 'payment'
									? 'border-stone-600 basis-3/5'
									: 'basis-1/5'
							}`}>
							<p
								className={`${
									state.checkoutForm === 'payment'
										? 'border-stone-600'
										: 'text-gray-500'
								}`}>
								Step 3
							</p>
							<p
								className={`${
									state.checkoutForm === 'payment'
										? ''
										: 'hidden'
								} md:block lg:block xl:block font-thin`}>
								Payment
							</p>
						</div>
					</div>
					<div className='px-2 py-4 md:pr-5'>
						{RenderCheckoutForm(state.checkoutForm)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckoutForm;
