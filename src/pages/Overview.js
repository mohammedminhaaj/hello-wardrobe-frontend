import { Fragment, useState } from 'react';
import { Eye, Heart, ShoppingBag } from 'react-feather';
import Breadcrumb from '../components/ui/Breadcrumb';

const breadcrumbs = [
	{
		id: Math.random(),
		name: 'Shop',
		linkTo: '#',
	},
	{
		id: Math.random(),
		name: 'Product Overview',
	},
];

const Overview = () => {
	const [image, setImage] = useState(
		'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg'
	);
	const imageClickHandler = (event) => {
		setImage(event.target.attributes['src'].value);
	};
	return (
		<Fragment>
			<div className='mx-auto py-20 px-4 sm:py-24 sm:px-8 lg:max-w-7xl lg:px-8'>
				<h2 className='sr-only'>Overview</h2>
				<Breadcrumb breadcrumbs={breadcrumbs} />
				<div className='md:hidden mt-5'>
					<img
						src={image}
						alt='Model wearing plain white basic tee.'
						className='h-full w-full object-cover object-center rounded-2xl'
					/>
					<div className='grid grid-cols-3 gap-3 py-3'>
						<img
							onClick={imageClickHandler}
							src='https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg'
							alt='Model wearing plain white basic tee.'
							className='h-full w-full object-cover object-center rounded-2xl active:ring-2 active:ring-slate-700'
						/>
						<img
							onClick={imageClickHandler}
							src='https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg'
							alt='Two each of gray, white, and black shirts laying flat.'
							className='h-full w-full object-cover object-center rounded-2xl active:ring-2 active:ring-slate-700'
						/>
						<img
							onClick={imageClickHandler}
							src='https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg'
							alt='Model wearing plain black basic tee.'
							className='h-full w-full object-cover object-center rounded-2xl active:ring-2 active:ring-slate-700'
						/>
					</div>
				</div>
				{/* <div className='hidden md:block lg:block xl:block mt-5'>
					<div className='grid grid-cols-3 gap-6'>
						<div className='grid grid-rows-2 h-screen'>
							<div className='h-full w-full'>
								<h2 className='font-bold text-2xl'>
									Basic Tee 6-Pack
								</h2>
								<p className='font-thin overflow-auto'>
									The Basic Tee 6-Pack allows you to fully
									express your vibrant personality with three
									grayscale options. Feeling adventurous? Put
									on a heather gray tee. Want to be a
									trendsetter? Try our exclusive colorway:
									"Black". Need to add an extra pop of color
									to your outfit? Our white tee has you
									covered.
								</p>
							</div>
							<img
								src='https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg'
								alt='Two each of gray, white, and black shirts laying flat.'
								className='h-full w-full object-cover object-center rounded-2xl hover:opacity-90'
							/>
						</div>
						<div className='grid grid-rows-2 h-screen'>
							<img
								src='https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg'
								alt='Model wearing plain white basic tee.'
								className='row-span-2 h-full w-full object-cover object-center rounded-2xl hover:opacity-90'
							/>
						</div>
						<div className='grid grid-rows-2 h-screen'>
							<img
								src='https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg'
								alt='Model wearing plain black basic tee.'
								className='h-full w-full object-cover object-center rounded-2xl hover:opacity-90'
							/>
						</div>
					</div>
				</div> */}
				<div className='hidden md:block lg:block xl:block mt-5 h-3/4'>
					<div className='grid grid-cols-3 gap-6'>
						<img
							src='https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg'
							alt='Two each of gray, white, and black shirts laying flat.'
							className='h-full w-full object-cover object-center rounded-2xl hover:opacity-90 mt-10'
						/>
						<img
							src='https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg'
							alt='Model wearing plain white basic tee.'
							className='h-full w-full object-cover object-center rounded-2xl hover:opacity-90'
						/>
						<img
							src='https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg'
							alt='Model wearing plain black basic tee.'
							className='h-full w-full object-cover object-center rounded-2xl hover:opacity-90 mt-20'
						/>
					</div>
				</div>
				<div className='mt-5 md:mt-20'>
					<h2 className='font-bold text-2xl'>Basic Tee 6-Pack</h2>
				</div>
				<div className='flex flex-col md:flex-row'>
					<div className='md:order-3 basis-1/3'>
						<p className='text-3xl tracking-tight'>₹192</p>
						<div className='mt-5 flex'>
							<Eye />
							<p className='ml-3'>
								17 people are currently watching this
							</p>
						</div>
						<div className='mt-3 flex'>
							<Heart />
							<p className='ml-3'>
								23 people have added this to their wishlist.
							</p>
						</div>
						<div className='mt-5 flex justify-between'>
							<p>Size</p>
							<p className='text-blue-500'>Size guide</p>
						</div>
						<div className='mt-3 rounded-xl border-2 text-center'>
							<p>Available sizes</p>
						</div>
						<div className='mt-5 flex flex-col md:flex-row gap-2'>
							<button className='bg-stone-200 hover:bg-stone-300 active:ring-2 active:ring-stone-400 rounded-lg py-2 px-4 basis-1/2 flex justify-center'>
								<Heart className='my-auto mr-1' size={16} />
								Add to Wishlist
							</button>
							<button className='bg-stone-500 hover:bg-stone-600 active:ring-2 active:ring-stone-700 text-white rounded-lg py-2 px-4 basis-1/2 flex justify-center'>
								<ShoppingBag className='my-auto mr-1' size={16} />
								Add to Bag
							</button>
						</div>
					</div>
					<hr className='mt-5 md:hidden' />
					<div className='mt-5 md:mt-0 md:order-1 basis-2/3 md:mr-5'>
						<p className='font-thin'>
							The Basic Tee 6-Pack allows you to fully express
							your vibrant personality with three grayscale
							options. Feeling adventurous? Put on a heather gray
							tee. Want to be a trendsetter? Try our exclusive
							colorway: "Black". Need to add an extra pop of color
							to your outfit? Our white tee has you covered.
						</p>
						<div className='mt-5'>
							<h3>Highlights</h3>
							<ul className='list-disc'>
								<li className='font-thin ml-5'>
									Hand cut and sewn locally
								</li>
								<li className='font-thin ml-5'>
									Dyed with our proprietary colors
								</li>
								<li className='font-thin ml-5'>
									Pre-washed & pre-shrunk
								</li>
								<li className='font-thin ml-5'>
									Ultra-soft 100% cotton
								</li>
							</ul>
						</div>
						<div className='mt-5'>
							<h3>Highlights</h3>
							<p className='font-thin'>
								The 6-Pack includes two black, two white, and
								two heather gray Basic Tees. Sign up for our
								subscription service and be the first to get
								new, exciting colors, like our upcoming
								"Charcoal Gray" limited release.
							</p>
						</div>
					</div>
					<span className='hidden md:order-2 md:mr-5 md:block lg-block xl-block h-auto border-r-2'></span>
				</div>
			</div>
		</Fragment>
	);
};

export default Overview;
