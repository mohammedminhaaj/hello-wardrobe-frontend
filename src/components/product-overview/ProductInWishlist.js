import { Heart } from 'react-feather';
const ProductInWishlist = () => {
	return (
		<div className='mt-3 flex gap-2'>
			<Heart size={18} className='my-auto hover:fill-red-400' />
			<p>23 people have added this to their wishlist</p>
		</div>
	);
};

export default ProductInWishlist;
