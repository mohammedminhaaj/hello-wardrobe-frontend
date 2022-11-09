import { Fragment, useEffect, useReducer, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowDown, Filter } from 'react-feather';
import FilterSection from '../components/shop/FilterSection';
import FilterSidebar from '../components/shop/FilterSidebar';
import Breadcrumb from '../components/ui/Breadcrumb';
import Loading from '../components/ui/Loading';
import Card from '../components/shop/Card';

import axios from 'axios';
import ServerError from '../components/ui/ServerError';
import { useLocation, useSearchParams } from 'react-router-dom';
import NoData from '../components/ui/NoData';
import SortMenu from '../components/shop/SortMenu';

const breadcrumbs = [
	{
		id: 1,
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

const filterReducer = (state, action) => {
	switch (action.type) {
		case 'add':
			if (
				state.find(
					(item) =>
						item[0] === action.payload[0] &&
						item[1] === action.payload[1]
				)
			)
				return [...state];
			return [...state, action.payload];
		case 'remove':
			return state.filter(
				(item) =>
					item[0] !== action.payload[0] ||
					item[1] !== action.payload[1]
			);
		case 'sort':
			return [
				...state.filter((item) => item[0] !== action.payload[0]),
				action.payload,
			];
		case 'clear':
			return [];
		default:
			throw new Error('No reducer function defined for this action!');
	}
};

const Shop = () => {
	const [showFilter, setShowFilter] = useState(false);
	const [showSort, setShowSort] = useState(false);
	const [renderShop, setRenderShop] = useState(
		<div className='col-span-3'>
			<Loading />
		</div>
	);

	const [searchParams, setSearchParams] = useSearchParams();
	const location = useLocation();
	const [activeFilters, setActiveFilters] = useReducer(filterReducer, [
		...searchParams,
	]);

	useEffect(() => {
		setSearchParams(activeFilters);
	}, [activeFilters, setSearchParams]);

	useEffect(() => {
		const fetchProducts = setTimeout(() => {
			axios
				.get(
					`/api/product/all-products/filter${
						location.search.length ? location.search : ''
					}`
				)
				.then((response) => {
					if (!response.data.length)
						setRenderShop(
							<div className='col-span-3'>
								<NoData />
							</div>
						);
					else
						setRenderShop(
							<RenderCards shopArray={response.data} />
						);
				})
				.catch((error) =>
					setRenderShop(
						<div className='col-span-3'>
							<ServerError error={error.message} />
						</div>
					)
				);
		}, 500);

		return () => {
			clearTimeout(fetchProducts);
		};
	}, [searchParams, location.search]);

	const filterClickHandler = () => {
		setShowFilter((previous) => !previous);
	};

	const sortCLickHandler = () => {
		setShowSort((previous) => !previous);
	};

	return (
		<Fragment>
			<h2 className='sr-only'>Shop</h2>
			<Breadcrumb breadcrumbs={breadcrumbs} />
			<div className='flex justify-between mt-5 mb-5'>
				<h1 className='text-2xl font-bold'>Shop</h1>
				<section className='flex gap-5'>
					<div
						onClick={sortCLickHandler}
						className={`${
							showSort ? 'font-semibold text-h-gray-200' : ''
						} flex gap-1 my-auto cursor-pointer`}>
						<p>Sort</p>
						<ArrowDown size={16} className='my-auto' />
					</div>
					<div
						className={`${
							!showSort ? 'hidden' : ''
						} text-white w-36 md:w-32 absolute -translate-x-24 md:-translate-x-20 translate-y-8 shadow-2xl py-2 px-4 z-10 rounded bg-h-gray-200`}>
						<SortMenu
							setActiveFilters={setActiveFilters}
							closeSortHandler={sortCLickHandler}
						/>
					</div>
					<Filter
						color={showFilter ? '#5f6487' : '#22223b'}
						onClick={filterClickHandler}
						className='md:hidden my-auto cursor-pointer hover:stroke-independence-300'
					/>
					{showFilter &&
						createPortal(
							<FilterSidebar
								activeFilters={activeFilters}
								setActiveFilters={setActiveFilters}
								cancelHandler={filterClickHandler}
							/>,
							document.getElementById('overlays')
						)}
				</section>
			</div>
			<hr />
			<div className='mt-5 grid grid-flow-col md:grid-cols-5 md:gap-10'>
				<section className='col-span-1 hidden md:block font-normal'>
					<FilterSection
						activeFilters={activeFilters}
						setActiveFilters={setActiveFilters}
					/>
				</section>
				<section className='col-span-4 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
					{renderShop}
				</section>
			</div>
		</Fragment>
	);
};

export default Shop;
