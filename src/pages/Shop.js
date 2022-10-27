import { Fragment, useState } from 'react';
import { createPortal } from 'react-dom';
import { Filter } from 'react-feather';
import FilterSection from '../components/shop/FilterSection';
import FilterSidebar from '../components/shop/FilterSidebar';
import Breadcrumb from '../components/ui/Breadcrumb';
import Card from '../components/ui/Card';
const shopArray = [
	{
		id: Math.random(),
		title: 'Nomad Tumblr',
		linkTo: '#',
		price: 34.99,
		img_src:
			'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
		img_alt:
			'Olive drab green insulated bottle with flared screw lid and flat top.',
	},
	{
		id: Math.random(),
		title: 'Focus Paper Refill',
		linkTo: '#',
		price: 88.99,
		img_src:
			'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
		img_alt:
			'Person using a pen to cross a task off a productivity paper card.',
	},
	{
		id: Math.random(),
		title: 'Machined Mechanical Pencil',
		linkTo: '#',
		price: 34.99,
		img_src:
			'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
		img_alt:
			'Hand holding black machined steel mechanical pencil with brass tip and top.',
	},
];

const breadcrumbs = [
	{
		id: Math.random(),
		name: 'Shop',
	},
];

const RenderShop = () => {
	return shopArray.map((item) => {
		return (
			<Card
				key={item.id}
				title={item.title}
				linkTo={item.linkTo}
				price={item.price}
				imageMeta={{
					src: item.img_src,
					alt: item.img_alt,
				}}
			/>
		);
	});
};

const Shop = () => {
	const [showFilter, setShowFilter] = useState(false);

	const filterClickHandler = () => {
		setShowFilter((previous) => !previous);
	};

	return (
		<Fragment>
			<div className='text-space-cadet-300 mx-auto py-20 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
				<h2 className='sr-only'>Shop</h2>
				<Breadcrumb breadcrumbs={breadcrumbs} />
				<div className='flex justify-between mt-5 mb-5'>
					<h1 className='text-2xl font-bold'>Shop</h1>
					<div className='flex gap-5'>
						<p className='font-medium my-auto'>Sort</p>
						<Filter
							color={showFilter ? '#3b82f6' : 'black'}
							onClick={filterClickHandler}
							className='md:hidden my-auto cursor-pointer hover:stroke-blue-400'
						/>
						{showFilter &&
							createPortal(
								<FilterSidebar
									cancelHandler={filterClickHandler}
								/>,
								document.getElementById('overlays')
							)}
					</div>
				</div>
				<hr />
				<div className='mt-5 grid grid-flow-col md:grid-cols-5 md:gap-10'>
					<div className='col-span-1 hidden md:block lg:block xl:block font-normal'>
						<FilterSection />
					</div>
					<div className='col-span-4 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
						<RenderShop />
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Shop;
