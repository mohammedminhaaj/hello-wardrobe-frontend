import { Fragment } from 'react';
import { Trash2 } from 'react-feather';
import { useDispatch } from 'react-redux';
import useToast from '../../hooks/useToast';
import { cartActions } from '../../store/cart-slice';

const CartItems = (props) => {
	const dispatch = useDispatch();
	const toast = useToast();
	const removeCartItemHandler = () => {
		dispatch(
			cartActions.removeItems({
				url_name: props.cartItem.url_name,
				size: props.cartItem.size,
			})
		);
		toast('Done, we removed the item.');
	};
	return (
		<Fragment>
			<div className='flex gap-5 justify-between'>
				<div className='flex gap-2'>
					<img
						className='rounded-lg w-32 h-32 md:h-28 md:w-28'
						src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg'
						alt='Olive drab green insulated bottle with flared screw lid and flat top.'
					/>
					<div className='text-left'>
						<p className='font-semibold text-lg'>
							{props.cartItem.name}
						</p>
						<p className='text-sm'>Size: {props.cartItem.size}</p>
						<p className='text-sm'>
							{props.cartItem.startDate ===
							props.cartItem.endDate ? (
								<span>
									Selected Date: {props.cartItem.startDate}
								</span>
							) : (
								<span>
									Selected Dates: {props.cartItem.startDate} -{' '}
									{props.cartItem.endDate}
								</span>
							)}
						</p>
						<p className='text-sm'>
							Rent for: {props.cartItem.rentDays} day(s)
						</p>
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
					title='Remove item'
					className='my-auto'>
					<Trash2 className='my-auto' />
				</button>
			</div>
			<hr className='my-2 last:hidden border-t-h-gray-100' />
		</Fragment>
	);
};

export default CartItems;
