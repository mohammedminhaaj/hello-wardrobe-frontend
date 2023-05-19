import { Fragment, useState } from 'react';
import { createPortal } from 'react-dom';
import { Calendar, Check, Heart, ShoppingBag } from 'react-feather';
import { batch, useDispatch, useSelector } from 'react-redux';
import useToast from '../../hooks/useToast';
import { cartActions, generateCartDict } from '../../store/cart-slice';
import {
	generateWishlistDict,
	wishlistActions,
} from '../../store/wishlist-slice';
import Breadcrumb from '../ui/Breadcrumb';
import ProductHighlights from './ProductHighlights';
import ProductInWishlist from './ProductInWishlist';
import SelectDateModal from './SelectDateModal';
import SizeChart from './SizeChart';
import SizeGuideModal from './SizeGuideModal';
import ErrorMessage from '../ui/ErrorMessage';
import { protectedInstance } from '../../utils/Common';
import { authActions } from '../../store/auth-slice';

const ProductDetails = (props) => {
	const [image, setImage] = useState(
		'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg'
	);
	const [showSizeGuide, setShowSizeGuide] = useState(false);
	const [showSelectDate, setShowSelectDate] = useState(false);
	const [cartObject, setCartObject] = useState({
		url_name: props.details.url_name,
		name: props.details.name,
		price: props.details.price,
		deliverAt: null,
		returnBy: null,
		size: null,
		dateArray: [],
	});
	const [showErrorMessage, setShowErrorMessage] = useState({
		size: {
			isVisible: false,
			message: 'Please select a size',
		},
		dateArray: {
			isVisible: false,
			message: 'Please select a date',
		},
		deliverAt: {
			isVisible: false,
			message: 'Please select a delivery time',
		},
		returnBy: {
			isVisible: false,
			message: 'Please select a return time',
		},
	});
	const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
	const cartItems = useSelector((state) => state.cart.cartItems);
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const toast = useToast();

	const imageClickHandler = (event) => {
		setImage(event.target.attributes['src'].value);
	};

	const sizeguideClickHandler = () => {
		setShowSizeGuide((previous) => !previous);
	};

	const selectDateClickHandler = () => {
		if (!cartObject.size) {
			setShowErrorMessage((prev) => {
				return {
					...prev,
					size: {
						isVisible: true,
						message: prev.size.message,
					},
				};
			});
		} else {
			setShowErrorMessage((prev) => {
				return {
					...prev,
					size: {
						isVisible: false,
						message: prev.size.message,
					},
				};
			});
			setShowSelectDate((previous) => !previous);
		}
	};
	const cartClickHandler = () => {
		if (
			!cartObject.size ||
			!cartObject.dateArray.length ||
			!cartObject.deliverAt ||
			!cartObject.returnBy
		) {
			const updatedErrors = {};
			for (let field of ['size', 'dateArray', 'deliverAt', 'returnBy']) {
				const isVisible =
					!cartObject[field] || !cartObject[field].length;
				const message = showErrorMessage[field]?.message;

				updatedErrors[field] = {
					isVisible,
					message,
				};
			}
			setShowErrorMessage((prev) => ({
				...prev,
				...updatedErrors,
			}));
		} else {
			const {
				url_name,
				name,
				price,
				size,
				dateArray,
				deliverAt,
				returnBy,
			} = cartObject;

			if (
				!cartItems.find(
					(item) => item.url_name === url_name && item.size === size
				)
			) {
				let cartData = {
					url_name,
					name,
					price,
					size,
					deliverAt,
					returnBy,
					startDate: dateArray[0].toDateString(),
					endDate: dateArray[1].toDateString(),
					rentDays: Math.floor(
						(dateArray[1].getTime() - dateArray[0].getTime()) /
							(1000 * 3600 * 24) +
							1
					),
				};
				dispatch(
					cartActions.addItem({
						cartItem: cartData,
						isAuthenticated: isAuthenticated,
					})
				);
				toast('Hurray! This item has been added to your shopping bag');
				isAuthenticated &&
					protectedInstance
						.post('/api/cart-wishlist/add-to-cart/', {
							...generateCartDict(cartData),
						})
						.catch((error) => {
							if (
								error.response.status === 403 ||
								error.response.data?.error?.code === 400
							) {
								toast(
									'Looks like your session is expired. Could you please try logging in again?'
								);
								batch(() => {
									dispatch(
										cartActions.setCartItems({
											cartItems: [cartData],
											isAuthenticated: false,
										})
									);
									dispatch(
										authActions.setIsAuthenticated(false)
									);
								});
							} else toast(error.response.data?.message);
						});
				setCartObject((prev) => {
					return {
						...prev,
						dateArray: [],
						deliverAt: null,
						returnBy: null,
					};
				});
			} else
				toast(
					'Hmmm, looks like this item with the same size is already present in your shopping bag'
				);
		}
	};

	const wishlistClickHandler = () => {
		let wishlistData = {
			url_name: props.details.url_name,
			name: props.details.name,
		};
		dispatch(
			wishlistActions.addItem({
				wishlistItem: wishlistData,
				isAuthenticated: isAuthenticated,
			})
		);
		toast('Great! This item has been added to your wishlist');
		isAuthenticated &&
			protectedInstance
				.post('/api/cart-wishlist/add-to-wishlist/', {
					...generateWishlistDict(wishlistData),
				})
				.catch((error) => {
					if (
						error.response.status === 403 ||
						error.response.data?.error?.code === 400
					) {
						toast(
							'Looks like your session is expired. Could you please try logging in again?'
						);
						batch(() => {
							dispatch(
								wishlistActions.setWishlistItems({
									wishlistItems: [wishlistData],
									isAuthenticated: false,
								})
							);
							dispatch(authActions.setIsAuthenticated(false));
						});
					} else toast(error.response.data?.message);
				});
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
					<div className='flex'>
						<p className='text-3xl tracking-tight'>
							{parseFloat(props.details.price).toLocaleString(
								'en-IN',
								{
									style: 'currency',
									currency: 'INR',
								}
							)}
						</p>
						<p className='text-sm mt-auto mr-2 inline'>/day</p>
						<p className='line-through font-thin my-auto'>
							{parseFloat(
								props.details.original_price
							).toLocaleString('en-IN', {
								style: 'currency',
								currency: 'INR',
							})}
						</p>
					</div>
					<ProductInWishlist />
					<div className='mt-5 flex justify-between'>
						<p>Size</p>
						<button
							onClick={sizeguideClickHandler}
							type='button'
							title='Size guide'
							className='text-h-gray-100 hover:text-h-gray-300'>
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
					{showErrorMessage.size.isVisible && !cartObject.size && (
						<ErrorMessage
							errorMessage={showErrorMessage.size.message}
						/>
					)}
					<div className='mt-5'>
						<button
							onClick={selectDateClickHandler}
							type='button'
							title='Select date'
							className='flex gap-1 text-h-gray-100 hover:text-h-gray-300'>
							Select Date
							<Calendar size={16} className='my-auto' />
						</button>
						{showSelectDate &&
							createPortal(
								<SelectDateModal
									cartObject={cartObject}
									setCartObject={setCartObject}
									onClose={selectDateClickHandler}
								/>,
								document.getElementById('overlays')
							)}
						{cartObject.dateArray.length !== 0 && (
							<p className='font-thin text-sm'>
								{cartObject.dateArray[0].toLocaleDateString() ===
								cartObject.dateArray[1].toLocaleDateString() ? (
									<span>
										Selected Date:{' '}
										{cartObject.dateArray[0].toDateString()}
									</span>
								) : (
									<span>
										Selected Dates:{' '}
										{cartObject.dateArray[0].toDateString()}{' '}
										-{' '}
										{cartObject.dateArray[1].toDateString()}
									</span>
								)}
							</p>
						)}

						{showErrorMessage.dateArray.isVisible &&
							!cartObject.dateArray.length && (
								<ErrorMessage
									errorMessage={
										showErrorMessage.dateArray.message
									}
								/>
							)}
						{showErrorMessage.deliverAt.isVisible &&
							!cartObject.deliverAt && (
								<ErrorMessage
									errorMessage={
										showErrorMessage.deliverAt.message
									}
								/>
							)}
						{showErrorMessage.returnBy.isVisible &&
							!cartObject.returnBy && (
								<ErrorMessage
									errorMessage={
										showErrorMessage.returnBy.message
									}
								/>
							)}
					</div>
					<section className='mt-5 flex flex-row gap-2'>
						{!props.details.deleted_at ? (
							<button
								onClick={cartClickHandler}
								type='button'
								title='Add to bag'
								className='basis-11/12 primary-button'>
								<ShoppingBag className='my-auto' size={16} />
								Add to Bag
							</button>
						) : (
							<button
								onClick={() =>
									toast(
										"We're sorry, the item is currently out of stock"
									)
								}
								type='button'
								title='Out of stock'
								className='basis-11/12 primary-button'>
								Out of Stock
							</button>
						)}
						{wishlistItems.find(
							(item) => item.url_name === props.details.url_name
						) ? (
							<button
								onClick={() => {
									toast(
										"Hmmm, looks like you've already added this item to your wishlist"
									);
								}}
								type='button'
								title='Added to wishlist'
								className='basis-1/12 hover:border-h-gray-200 hover:text-h-gray-200 active:ring-h-gray-300 active:ring-1 border-h-gray-100 text-h-gray-100 border-2 rounded-3xl px-4 py-2'>
								<Check className='m-auto' size={16} />
							</button>
						) : (
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
						)}
					</section>
				</section>
				<hr className='mt-5 md:hidden  fill-isabelline-300' />
				<article className='mt-5 md:mt-0 md:order-1 basis-2/3 md:mr-5'>
					<p className='font-thin'>{props.details.description}</p>
					<section className='mt-5'>
						<h3>Highlights</h3>
						<ProductHighlights
							highlights={props.details.highlights}
						/>
					</section>
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
