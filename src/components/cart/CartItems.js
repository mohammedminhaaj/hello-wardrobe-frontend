import { Fragment, useState } from 'react';
import { Trash2 } from 'react-feather';
import { batch, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useToast from '../../hooks/useToast';
import { cartActions } from '../../store/cart-slice';
import { protectedInstance } from '../../utils/Common';
import { authActions } from '../../store/auth-slice';
import LoaderIcon from '../ui/Loader/LoaderIcon';

const performDeleteCartAction = (
	dispatch,
	toast,
	setButtonState,
	props,
	isAuthenticated
) => {
	dispatch(
		cartActions.removeItem({
			cartItem: {
				url_name: props.cartItem.url_name,
				size: props.cartItem.size,
				price: props.cartItem.price,
				rentDays: props.cartItem.rentDays,
			},
			isAuthenticated: isAuthenticated,
		})
	);
	toast('Done, we have removed the item for you.');
	setButtonState({
		disabled: false,
		text: <Trash2 className='my-auto' />,
	});
};

const CartItems = (props) => {
	const [buttonState, setButtonState] = useState({
		disabled: false,
		text: <Trash2 className='my-auto' />,
	});
	const dispatch = useDispatch();
	const toast = useToast();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const removeCartItemHandler = () => {
		setButtonState({
			disabled: true,
			text: <LoaderIcon size={24} />,
		});
		if (isAuthenticated) {
			protectedInstance
				.post('/api/cart-wishlist/remove-from-cart/', {
					url_name: props.cartItem.url_name,
					size: props.cartItem.size,
				})
				.then(() => {
					performDeleteCartAction(
						dispatch,
						toast,
						setButtonState,
						props,
						isAuthenticated
					);
				})
				.catch((error) => {
					if (
						error.response.status === 403 ||
						error.response.data?.error?.code === 400
					) {
						toast(
							'Looks like your session is expired. Could you please try logging in again?'
						);
						batch(() => {
							dispatch(
								cartActions.setCartItems({
									cartItems: [],
									isAuthenticated: false,
								})
							);
							dispatch(authActions.setIsAuthenticated(false));
						});
					} else toast(error.response.data?.message);
					setButtonState({
						disabled: false,
						text: <Trash2 className='my-auto' />,
					});
				});
		} else {
			performDeleteCartAction(
				dispatch,
				toast,
				setButtonState,
				props,
				isAuthenticated
			);
		}
	};
	return (
		<Fragment>
			<div className='flex gap-5 justify-between'>
				<div className='flex gap-2'>
					<figure className='shrink'>
						<img
							className='rounded-lg max-w-40 max-h-40 md:max-w-44 md:max-h-44'
							src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg'
							alt='Olive drab green insulated bottle with flared screw lid and flat top.'
						/>
					</figure>

					<div className='text-left shrink'>
						<Link
							onClick={props.closeCartHandler}
							to={`/shop/${props.cartItem.url_name}`}
							className='font-semibold text-lg'>
							{props.cartItem.name}
						</Link>
						<div className='text-xs md:text-sm font-light'>
							<p>
								<span className='font-normal'>Size:</span>{' '}
								{props.cartItem.size}
							</p>
							<p>
								{props.cartItem.startDate ===
								props.cartItem.endDate ? (
									<Fragment>
										<span className='font-normal'>
											Selected Date:{' '}
										</span>
										{props.cartItem.startDate}
									</Fragment>
								) : (
									<Fragment>
										<span className='font-normal'>
											Selected Dates:{' '}
										</span>
										{props.cartItem.startDate} -{' '}
										{props.cartItem.endDate}
									</Fragment>
								)}
							</p>
							<p>
								<span className='font-normal'>
									Deliver At:{' '}
								</span>
								{props.cartItem.deliverAt}
							</p>
							<p>
								<span className='font-normal'>Return By: </span>
								{props.cartItem.returnBy}
							</p>
							<p>
								<span className='font-normal'>Rent for: </span>
								{props.cartItem.rentDays} day(s)
							</p>
						</div>

						<p className='font-bold text-xl'>
							{(
								props.cartItem.price * props.cartItem.rentDays
							).toLocaleString('en-IN', {
								style: 'currency',
								currency: 'INR',
							})}
						</p>
					</div>
				</div>
				<button
					onClick={removeCartItemHandler}
					type='button'
					disabled={buttonState.disabled}
					title='Remove item'
					className='my-auto shrink'>
					{buttonState.text}
				</button>
			</div>
			<hr className='my-2 last:hidden border-t-h-gray-100' />
		</Fragment>
	);
};

export default CartItems;
