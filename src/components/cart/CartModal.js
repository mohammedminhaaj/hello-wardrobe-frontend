import { ArrowRight } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../../store/cart-slice';
import NoData from '../ui/NoData';
import CartItems from './CartItems';
import Modal from '../ui/Modal';
import { AnimatePresence, motion } from 'framer-motion';

const CartModal = () => {
	const dispatch = useDispatch();
	const { cartItems, totalAmount, showCart } = useSelector(
		(state) => state.cart
	);
	const closeCartHandler = () => {
		dispatch(cartActions.toggleCart());
	};
	return (
		<AnimatePresence>
			{showCart && (
				<Modal
					key='cart-modal'
					headerText='Shopping Bag'
					onClose={closeCartHandler}>
					<ul className='overflow-y-auto overflow-x-hidden max-h-[65vh] text-center font-thin'>
						<AnimatePresence>
							{!cartItems.length ? (
								<li>
									<NoData key='no-data' />
								</li>
							) : (
								cartItems.map((item) => (
									<CartItems
										closeCartHandler={closeCartHandler}
										key={item.url_name + item.size}
										cartItem={item}
									/>
								))
							)}
						</AnimatePresence>
					</ul>
					{cartItems.length !== 0 && (
						<section className='mt-3 flex justify-between'>
							<div>
								<p className='text-lg font-thin'>Subtotal:</p>
								<p className='text-2xl'>
									{totalAmount.toLocaleString('en-IN', {
										style: 'currency',
										currency: 'INR',
									})}
								</p>
							</div>
							<motion.div
								initial={{ y: -20, opacity: 0 }}
								animate={{
									y: 0,
									opacity: 1,
									transition: { delay: 0.5 },
								}}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className='mt-auto'
								tabIndex='-1'>
								<Link
									onClick={closeCartHandler}
									to='/checkout'
									className='primary-button'>
									Checkout
									<ArrowRight />
								</Link>
							</motion.div>
						</section>
					)}
				</Modal>
			)}
		</AnimatePresence>
	);
};

export default CartModal;
