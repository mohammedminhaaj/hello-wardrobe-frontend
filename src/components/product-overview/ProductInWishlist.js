import { Heart } from 'react-feather';
import { motion } from 'framer-motion';

const beat = {
	scale: [1, 1.2, 1],
	transition: {
		duration: 0.6,
		repeat: Infinity,
		repeatType: 'reverse',
	},
};

const ProductInWishlist = () => {
	return (
		<section className='mt-3 flex gap-2'>
			<motion.figure whileHover={beat} whileTap={beat} className='mt-1'>
				<Heart size={18} className='hover:fill-red-400' />
			</motion.figure>

			<p>23 people have added this to their wishlist</p>
		</section>
	);
};

export default ProductInWishlist;
