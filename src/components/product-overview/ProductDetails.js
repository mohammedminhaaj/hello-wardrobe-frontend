import { Fragment, useState } from 'react';
import { createPortal } from 'react-dom';
import { Calendar, Heart, ShoppingBag } from 'react-feather';
import useToast from '../../hooks/useToast';
import Breadcrumb from '../ui/Breadcrumb';
import ProductHighlights from './ProductHighlights';
import ProductInWishlist from './ProductInWishlist';
import SizeChart from './SizeChart';
import SizeGuideModal from './SizeGuideModal';

const ProductDetails = (props) => {
	const [image, setImage] = useState(
		'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg'
	);
	const [showSizeGuide, setShowSizeGuide] = useState(false);
	const [cartObject, setCartObject] = useState({
		name: props.details.name,
		size: null,
		sizeMessage: 'Please select a size',
		dateArray: [],
		dateMessage: 'Please select a date',
	});
	const [showMessage, setShowMessage] = useState(false);
	const toast = useToast();
	const imageClickHandler = (event) => {
		setImage(event.target.attributes['src'].value);
	};

	const sizeguideClickHandler = () => {
		setShowSizeGuide((previous) => !previous);
	};

	const cartClickHandler = () => {
		if (!cartObject.size || !cartObject.dateArray.length)
			setShowMessage(true);
		else setShowMessage(false);
	};

	const wishlistClickHandler = () => {
		toast('Added to Wishlist');
	};

	const breadcrumbs = [
		{
			id: 1,
			name: 'Shop',
			linkTo: '/shop',
		},
		{
			id: 2,
			name: props.details.name,
		},
	];

	return (
		<Fragment>
			<h2 className='sr-only'>Overview</h2>
			<Breadcrumb breadcrumbs={breadcrumbs} />
			<section className='md:hidden mt-5'>
				<figure>
					<img
						src={image}
						alt='Model wearing plain white basic tee.'
						className='h-full w-full object-cover object-center rounded-2xl'
					/>
				</figure>
				<div className='grid grid-cols-3 gap-3 py-3'>
					<figure>
						<img
							onClick={imageClickHandler}
							src='https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg'
							alt='Model wearing plain white basic tee.'
							className='h-full w-full object-cover object-center rounded-2xl active:ring-1 active:ring-slate-700'
						/>
					</figure>
					<figure>
						<img
							onClick={imageClickHandler}
							src='https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg'
							alt='Two each of gray, white, and black shirts laying flat.'
							className='h-full w-full object-cover object-center rounded-2xl active:ring-1 active:ring-slate-700'
						/>
					</figure>
					<figure>
						<img
							onClick={imageClickHandler}
							src='https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg'
							alt='Model wearing plain black basic tee.'
							className='h-full w-full object-cover object-center rounded-2xl active:ring-1 active:ring-slate-700'
						/>
					</figure>
				</div>
			</section>

			<div className='hidden md:block mt-5 h-3/4'>
				<section className='grid grid-cols-3 gap-6'>
					<figure>
						<img
							src='https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg'
							alt='Two each of gray, white, and black shirts laying flat.'
							className='h-full w-full object-cover object-center rounded-2xl hover:opacity-90 mt-10'
						/>
					</figure>
					<figure>
						<img
							src='https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg'
							alt='Model wearing plain white basic tee.'
							className='h-full w-full object-cover object-center rounded-2xl hover:opacity-90'
						/>
					</figure>
					<figure>
						<img
							src='https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg'
							alt='Model wearing plain black basic tee.'
							className='h-full w-full object-cover object-center rounded-2xl hover:opacity-90 mt-20'
						/>
					</figure>
				</section>
			</div>
			<div className='mt-5 md:mt-20'>
				<h1 className='font-bold text-2xl'>{props.details.name}</h1>
			</div>
			<div className='flex flex-col md:flex-row'>
				<section className='md:order-3 basis-1/3'>
					<div className='flex gap-3'>
						<p className='text-3xl tracking-tight'>
							₹{props.details.price}
						</p>
						<p className='line-through font-thin my-auto'>
							₹{props.details.original_price}
						</p>
					</div>
					<ProductInWishlist />
					<div className='mt-5 flex justify-between'>
						<p>Size</p>
						<button
							onClick={sizeguideClickHandler}
							type='button'
							title='Size guide'
							className='text-h-gray-100 hover:text-h-gray-300 hover:cursor-help'>
							Size guide
						</button>
						{showSizeGuide &&
							createPortal(
								<SizeGuideModal
									onClose={sizeguideClickHandler}
								/>,
								document.getElementById('overlays')
							)}
					</div>
					<SizeChart
						availableSizes={props.details.size}
						onSelect={setCartObject}
					/>
					{showMessage && !cartObject.size && (
						<p className='text-red-500'>{cartObject.sizeMessage}</p>
					)}
					<div className='mt-5'>
						<button
							type='button'
							title='Select date'
							className='flex gap-1 text-h-gray-100 hover:text-h-gray-300'>
							Select Date
							<Calendar size={16} className='my-auto' />
						</button>

						{showMessage && !cartObject.dateArray.length && (
							<p className='text-red-500'>
								{cartObject.dateMessage}
							</p>
						)}
					</div>
					<section className='mt-5 flex flex-row gap-2'>
						<button
							onClick={cartClickHandler}
							type='button'
							title='Add to bag'
							className='basis-11/12 primary-button'>
							<ShoppingBag className='my-auto' size={16} />
							Add to Bag
						</button>
						<button
							onClick={wishlistClickHandler}
							type='button'
							title='Add to wishlist'
							className='basis-1/12 secondary-button group'>
							<Heart
								className='my-auto group-hover:fill-white'
								size={16}
							/>
						</button>
					</section>
				</section>
				<hr className='mt-5 md:hidden  fill-isabelline-300' />
				<article className='mt-5 md:mt-0 md:order-1 basis-2/3 md:mr-5'>
					<p className='font-thin'>{props.details.description}</p>
					<div className='mt-5'>
						<h3>Highlights</h3>
						<ProductHighlights
							highlights={props.details.highlights}
						/>
					</div>
					<div className='mt-5'>
						<h3>Details</h3>
						<p className='font-thin'>{props.details.details}</p>
					</div>
				</article>
				<span className='hidden md:order-2 md:mr-5 md:block h-auto border-r border-isabelline-300'></span>
			</div>
		</Fragment>
	);
};

export default ProductDetails;
