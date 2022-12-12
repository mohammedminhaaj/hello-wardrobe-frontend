import { Fragment } from 'react';
import { ArrowRight, X } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../../store/cart-slice';
import Backdrop from '../ui/Backdrop';
import NoData from '../ui/NoData';
import CartItems from './CartItems';

const CartModal = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.cartItems);
	const totalAmount = useSelector((state) => state.cart.totalAmount);
	const closeCartHandler = () => {
		dispatch(cartActions.toggleCart());
	};
	return (
		<Fragment>
			<Backdrop onClose={closeCartHandler} />
			<div className='flex justify-center'>
				<section className='fixed p-5 w-full mx-auto z-40 md:w-2/3 h-auto'>
					<div className='bg-isabelline-100 rounded-lg shadow-xl'>
						<div className='flex justify-between items-center p-5'>
							<h3 className='text-xl font-medium text-space-cadet-300'>
								Shopping bag
							</h3>
							<button type='button'>
								<X onClick={closeCartHandler} />
							</button>
						</div>
						<div className='p-6 overflow-y-auto max-h-[65vh] text-center font-thin'>
							{!cartItems.length && <NoData />}
							{cartItems.map((item) => (
								<CartItems
									closeCartHandler={closeCartHandler}
									key={item.url_name + item.size}
									cartItem={item}
								/>
							))}
						</div>

						{cartItems.length !== 0 && (
							<div className='flex justify-between p-6'>
								<div>
									<p className='text-lg font-thin'>
										Subtotal amount:
									</p>
									<p className='text-2xl'>
										{totalAmount.toLocaleString('en-IN', {
											style: 'currency',
											currency: 'INR',
										})}
									</p>
								</div>
								<Link
									onClick={closeCartHandler}
									to='/checkout'
									className='primary-button my-auto'>
									Checkout
									<ArrowRight />
								</Link>
							</div>
						)}
					</div>
				</section>
			</div>
		</Fragment>
	);
};

export default CartModal;
