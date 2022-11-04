import { Fragment, useState } from 'react';
import { Eye, Heart, ShoppingBag } from 'react-feather';
import Breadcrumb from '../components/ui/Breadcrumb';

const breadcrumbs = [
	{
		id: Math.random(),
		name: 'Shop',
		linkTo: '/shop',
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

			<div className='hidden md:block lg:block xl:block mt-5 h-3/4'>
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
				<h1 className='font-bold text-2xl'>Basic Tee 6-Pack</h1>
			</div>
			<div className='flex flex-col md:flex-row'>
				<section className='md:order-3 basis-1/3'>
					<div className='flex'>
						<p className='text-3xl tracking-tight mr-3'>₹192</p>
						<p className='line-through font-thin my-auto'>₹200</p>
					</div>
					<div className='mt-5 flex'>
						<Eye />
						<p className='ml-3'>
							17 people are currently watching this
						</p>
					</div>
					<div className='mt-3 flex'>
						<Heart />
						<p className='ml-3'>
							23 people have added this to their wishlist
						</p>
					</div>
					<div className='mt-5 flex justify-between'>
						<p>Size</p>
						<p className='text-h-gray-100 hover:text-h-gray-300'>
							Size guide
						</p>
					</div>
					<section className='mt-3 rounded-xl bg-silver-pink-100 p-2 md:px-6 md:py-2'>
						<ul className='grid grid-cols-4 gap-4 text-center'>
							<li>
								<input
									id='size-xxs'
									type='radio'
									name='size'
									defaultValue='XXS'
									className='sr-only peer'
								/>
								<label
									htmlFor='size-xxs'
									className='hover:bg-silver-pink-200 focus:outline-silver-pink-300 active:ring-1 active:ring-silver-pink-300 rounded-full py-1 px-3 cursor-pointer peer-checked:text-isabelline-100 peer-checked:bg-silver-pink-300'>
									XXS
								</label>
							</li>
							<li>
								<input
									id='size-xs'
									type='radio'
									name='size'
									defaultValue='XS'
									className='sr-only peer'
								/>
								<label
									htmlFor='size-xs'
									className='hover:bg-silver-pink-200 focus:outline-silver-pink-300 active:ring-1 active:ring-silver-pink-300 rounded-full py-1 px-3 cursor-pointer peer-checked:text-isabelline-100 peer-checked:bg-silver-pink-300'>
									XS
								</label>
							</li>
							<li>
								<input
									id='size-s'
									type='radio'
									name='size'
									defaultValue='S'
									className='sr-only peer'
								/>
								<label
									htmlFor='size-s'
									className='hover:bg-silver-pink-200 focus:outline-silver-pink-300 active:ring-1 active:ring-silver-pink-300 rounded-full py-1 px-3 cursor-pointer peer-checked:text-isabelline-100 peer-checked:bg-silver-pink-300'>
									S
								</label>
							</li>
							<li>
								<input
									id='size-m'
									type='radio'
									name='size'
									defaultValue='M'
									className='sr-only peer'
								/>
								<label
									htmlFor='size-m'
									className='hover:bg-silver-pink-200 focus:outline-silver-pink-300 active:ring-1 active:ring-silver-pink-300 rounded-full py-1 px-3 cursor-pointer peer-checked:text-isabelline-100 peer-checked:bg-silver-pink-300'>
									M
								</label>
							</li>
							<li>
								<input
									id='size-l'
									type='radio'
									name='size'
									defaultValue='L'
									className='sr-only peer'
								/>
								<label
									htmlFor='size-l'
									className='hover:bg-silver-pink-200 focus:outline-silver-pink-300 active:ring-1 active:ring-silver-pink-300 rounded-full py-1 px-3 cursor-pointer peer-checked:text-isabelline-100 peer-checked:bg-silver-pink-300'>
									L
								</label>
							</li>
							<li>
								<input
									id='size-xl'
									type='radio'
									name='size'
									defaultValue='XL'
									className='sr-only peer'
								/>
								<label
									htmlFor='size-xl'
									className='hover:bg-silver-pink-200 focus:outline-silver-pink-300 active:ring-1 active:ring-silver-pink-300 rounded-full py-1 px-3 cursor-pointer peer-checked:text-isabelline-100 peer-checked:bg-silver-pink-300'>
									XL
								</label>
							</li>
							<li>
								<input
									id='size-2xl'
									type='radio'
									name='size'
									defaultValue='2XL'
									className='sr-only peer'
								/>
								<label
									htmlFor='size-2xl'
									className='hover:bg-silver-pink-200 focus:outline-silver-pink-300 active:ring-1 active:ring-silver-pink-300 rounded-full py-1 px-3 cursor-pointer peer-checked:text-isabelline-100 peer-checked:bg-silver-pink-300'>
									2XL
								</label>
							</li>
							<li>
								<input
									id='size-3xl'
									type='radio'
									name='size'
									defaultValue='3XL'
									className='sr-only peer'
								/>
								<label
									htmlFor='size-3xl'
									className='hover:bg-silver-pink-200 focus:outline-silver-pink-300 active:ring-1 active:ring-silver-pink-300 rounded-full py-1 px-3 cursor-pointer peer-checked:text-isabelline-100 peer-checked:bg-silver-pink-300'>
									3XL
								</label>
							</li>
						</ul>
					</section>
					<div className='mt-5'>
						<h2 className='text-h-gray-100 hover:text-h-gray-300'>
							Select Date
						</h2>
					</div>
					<section className='mt-5 flex flex-col md:flex-row gap-2'>
						<button
							type='button'
							className='flex justify-center basis-1/2 secondary-button'>
							<Heart className='my-auto mr-1' size={16} />
							Add to Wishlist
						</button>
						<button
							type='button'
							className='flex justify-center basis-1/2 primary-button'>
							<ShoppingBag className='my-auto mr-1' size={16} />
							Add to Bag
						</button>
					</section>
				</section>
				<hr className='mt-5 md:hidden  fill-isabelline-300' />
				<article className='mt-5 md:mt-0 md:order-1 basis-2/3 md:mr-5'>
					<p className='font-thin'>
						The Basic Tee 6-Pack allows you to fully express your
						vibrant personality with three grayscale options.
						Feeling adventurous? Put on a heather gray tee. Want to
						be a trendsetter? Try our exclusive colorway: "Black".
						Need to add an extra pop of color to your outfit? Our
						white tee has you covered.
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
						<h3>Details</h3>
						<p className='font-thin'>
							The 6-Pack includes two black, two white, and two
							heather gray Basic Tees. Sign up for our
							subscription service and be the first to get new,
							exciting colors, like our upcoming "Charcoal Gray"
							limited release.
						</p>
					</div>
				</article>
				<span className='hidden md:order-2 md:mr-5 md:block lg:block xl:block h-auto border-r border-isabelline-300'></span>
			</div>
		</Fragment>
	);
};

export default Overview;
