import { Heart } from 'react-feather';
const ProductInWishlist = () => {
	return (
		<section className='mt-3 flex gap-2'>
			<Heart size={18} className='mt-1 hover:fill-red-400' />
			<p>23 people have added this to their wishlist</p>
		</section>
	);
};

export default ProductInWishlist;
