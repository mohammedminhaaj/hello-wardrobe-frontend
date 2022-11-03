import { Fragment, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Filter } from 'react-feather';
import FilterSection from '../components/shop/FilterSection';
import FilterSidebar from '../components/shop/FilterSidebar';
import Breadcrumb from '../components/ui/Breadcrumb';
import Loading from '../components/ui/Loading';
import Card from '../components/shop/Card';

import axios from 'axios';
import ServerError from '../components/ui/ServerError';

const breadcrumbs = [
	{
		id: Math.random(),
		name: 'Shop',
	},
];

const RenderCards = (props) => {
	return props.shopArray.map((item) => {
		return (
			<Card
				key={item.id}
				title={item.name}
				linkTo='#'
				price={item.price}
				imageMeta={{
					src: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
					alt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
				}}
			/>
		);
	});
};

const Shop = () => {
	const [showFilter, setShowFilter] = useState(false);
	const [renderShop, setRenderShop] = useState(
		<div className='col-span-3'>
			<Loading />
		</div>
	);

	useEffect(() => {
		axios
			.get('/api/product/all-products/')
			.then((response) =>
				setRenderShop(<RenderCards shopArray={response.data} />)
			)
			.catch((error) =>
				setRenderShop(
					<div className='col-span-3'>
						<ServerError error={error.message} />
					</div>
				)
			);
	}, []);

	const filterClickHandler = () => {
		setShowFilter((previous) => !previous);
	};

	return (
		<Fragment>
			<h2 className='sr-only'>Shop</h2>
			<Breadcrumb breadcrumbs={breadcrumbs} />
			<div className='flex justify-between mt-5 mb-5'>
				<h1 className='text-2xl font-bold'>Shop</h1>
				<section className='flex gap-5'>
					<p className='font-medium my-auto'>Sort</p>
					<Filter
						color={showFilter ? '#5f6487' : '#22223b'}
						onClick={filterClickHandler}
						className='md:hidden my-auto cursor-pointer hover:stroke-independence-300'
					/>
					{showFilter &&
						createPortal(
							<FilterSidebar
								cancelHandler={filterClickHandler}
							/>,
							document.getElementById('overlays')
						)}
				</section>
			</div>
			<hr />
			<div className='mt-5 grid grid-flow-col md:grid-cols-5 md:gap-10'>
				<section className='col-span-1 hidden md:block lg:block xl:block font-normal'>
					<FilterSection />
				</section>
				<section className='col-span-4 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
					{renderShop}
				</section>
			</div>
		</Fragment>
	);
};

export default Shop;
