import { ArrowRight, X } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../../store/cart-slice';
import NoData from './NoData';

const CartModal = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.cartItems);
	const closeCartHandler = () => {
		dispatch(cartActions.toggleCart());
	};

	return (
		<section className='fixed top-0 left-0 right-0 bottom-0 z-30 w-full h-auto backdrop-blur-sm'>
			<div className='p-4 w-full md:w-2/3 mx-auto h-auto'>
				<div className='bg-isabelline-100 rounded-lg shadow-xl'>
					<div className='flex justify-between items-center p-5 rounded-t'>
						<h3 className='text-xl font-medium text-space-cadet-300'>
							Shopping bag
						</h3>
						<button type='button'>
							<X onClick={closeCartHandler} />
						</button>
					</div>
					<div className='p-6 overflow-y-auto max-h-[65vh] text-center font-thin'>
						{cartItems.length === 0 && <NoData />}
					</div>
					<div className='flex flex-row-reverse p-6 space-x-2 rounded'>
						<Link
							onClick={closeCartHandler}
							to='/checkout'
							className='primary-button'>
							Continue to payment
							<ArrowRight />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CartModal;
