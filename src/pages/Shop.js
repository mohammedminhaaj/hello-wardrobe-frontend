import { Fragment, useEffect, useReducer, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowDown, ArrowRight, ArrowLeft, Filter } from 'react-feather';
import FilterSection from '../components/shop/FilterSection';
import FilterSidebar from '../components/shop/FilterSidebar';
import Breadcrumb from '../components/ui/Breadcrumb';
import Loading from '../components/ui/Loader/Loading';
import Card from '../components/shop/Card';

import axios from 'axios';
import ServerError from '../components/ui/ServerError';
import { useLocation, useSearchParams } from 'react-router-dom';
import NoData from '../components/ui/NoData';
import SortMenu from '../components/shop/SortMenu';
import { AnimatePresence, motion } from 'framer-motion';

const breadcrumbs = [
	{
		id: 1,
		name: 'Shop',
	},
];

const initialFilterData = {
	primary_category_details: [],
	secondary_category_details: [],
	filter_details: [],
	size_details: [],
};

const RenderCards = (props) => {
	return (
		<AnimatePresence>
			{props.shopArray.map((item, index) => (
				<motion.div
					key={item.id}
					initial={{ opacity: 0, translateY: -50 }}
					animate={{ opacity: 1, translateY: 0 }}
					transition={{ duration: 0.5, delay: index * 0.2 }}
					exit={{ opacity: 0, translateY: -50 }}>
					<Card
						title={item.name}
						linkTo={item.url_name}
						price={item.price}
						imageMeta={{
							src: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
							alt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
						}}
					/>
				</motion.div>
			))}
		</AnimatePresence>
	);
};

const filterReducer = (state, action) => {
	const filterArray = state.filter((item) => item[0] !== 'page');
	switch (action.type) {
		case 'add':
			if (
				!action.payload ||
				filterArray.find(
					(item) =>
						item[0] === action.payload[0] &&
						item[1] === action.payload[1]
				)
			)
				return [...filterArray];
			return [...filterArray, action.payload];
		case 'remove':
			return [
				...filterArray.filter(
					(item) =>
						item[0] !== action.payload[0] ||
						item[1] !== action.payload[1]
				),
			];
		case 'sort':
			return [
				...filterArray.filter((item) => item[0] !== action.payload[0]),
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
	const [page, setPage] = useState({
		nextPage: null,
		previousPage: null,
	});
	const [showNavButtons, setShowNavButtons] = useState(false);

	const [searchParams, setSearchParams] = useSearchParams();
	const location = useLocation();
	const [activeFilters, setActiveFilters] = useReducer(filterReducer, [
		...searchParams,
	]);

	const [filterData, setFilterData] = useState({
		...initialFilterData,
		message: 'Loading, please wait...',
	});

	useEffect(() => {
		setSearchParams(activeFilters);
	}, [activeFilters, setSearchParams]);

	useEffect(() => {
		setShowNavButtons(false);
		setRenderShop(
			<div className='col-span-3'>
				<Loading />
			</div>
		);
		const fetchProducts = setTimeout(() => {
			axios
				.get(
					`/api/product/all-products/filter${
						location.search.length ? location.search : ''
					}`
				)
				.then((response) => {
					if (!response.data.count)
						setRenderShop(
							<div className='col-span-3'>
								<NoData />
							</div>
						);
					else {
						setRenderShop(
							<RenderCards shopArray={response.data.results} />
						);
						setPage({
							nextPage: response.data.next,
							previousPage: response.data.previous,
						});
						setShowNavButtons(true);
					}
				})
				.catch((error) =>
					setRenderShop(
						<div className='col-span-3'>
							<ServerError error={error.message} />
						</div>
					)
				);
		}, 500);
		window.scrollTo(0, 0);

		return () => {
			clearTimeout(fetchProducts);
		};
	}, [searchParams, location.search]);

	useEffect(() => {
		axios
			.get('/api/product/filter-details/')
			.then((response) => setFilterData(response.data?.data))
			.catch(() =>
				setFilterData({
					...initialFilterData,
					message: 'Failed to load filter details',
				})
			);
	}, []);

	const filterClickHandler = () => {
		setShowFilter((previous) => !previous);
	};

	const sortCLickHandler = () => {
		setShowSort((previous) => !previous);
	};

	const setPageHandler = (to) => {
		let urlArray = [];

		if (to === 'next') urlArray = page.nextPage.split('?');
		else if (to === 'previous') urlArray = page.previousPage.split('?');

		const searchParam = new URLSearchParams(urlArray[1]);
		const pageValue = searchParam.get('page');

		if (pageValue)
			setActiveFilters({
				type: 'add',
				payload: ['page', pageValue],
			});
		else
			setActiveFilters({
				type: 'add',
				payload: null,
			});
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
								filterData={filterData}
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
						filterData={filterData}
						activeFilters={activeFilters}
						setActiveFilters={setActiveFilters}
					/>
				</section>
				<div className='flex flex-col col-span-4 gap-5'>
					<section className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
						{renderShop}
					</section>

					{showNavButtons && (
						<section className='flex justify-between'>
							{page.previousPage && (
								<button
									type='button'
									onClick={() => setPageHandler('previous')}
									className='rounded flex border-2 border-silver-pink-100 gap-1 justify-center px-4 py-2 hover:bg-silver-pink-100 active:ring-1 hover:text-white active:ring-silver-pink-200'>
									<ArrowLeft className='my-auto' size={16} />
									Previous
								</button>
							)}
							{page.nextPage && (
								<button
									type='button'
									onClick={() => setPageHandler('next')}
									className='rounded border-2 border-silver-pink-100 ml-auto flex gap-1 justify-center px-4 py-2 hover:bg-silver-pink-100 hover:text-white active:ring-1 active:ring-silver-pink-200'>
									Next
									<ArrowRight className='my-auto' size={16} />
								</button>
							)}
						</section>
					)}
				</div>
			</div>
		</Fragment>
	);
};

export default Shop;
