import { Fragment, useState } from 'react';
import { User, ShoppingBag, Search, Menu, X } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { cartActions } from '../../store/cart-slice';
import { motion } from 'framer-motion';

const navContainer = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const navItems = {
	hidden: {
		scale: 0,
	},
	visible: {
		scale: 1,
		transition: {
			type: 'tween',
		},
	},
};

const NavigationBar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const cartItems = useSelector((state) => state.cart.cartItems);
	const dispatch = useDispatch();

	const menuClickHandler = () => {
		setShowMenu((previous) => !previous);
	};

	const shoppingbagClickHandler = () => {
		dispatch(cartActions.toggleCart());
	};

	return (
		<Fragment>
			<nav className='bg-h-gray-100 text-isabelline-100 px-2 sm:px-4 py-2.5 fixed w-full z-20'>
				<div className='container flex flex-wrap justify-between items-center mx-auto'>
					<Link to='/' className='flex items-center'>
						<span className='self-center text-xl hover:text-space-cadet-300 font-semibold whitespace-nowrap'>
							Hello Wardrobe
						</span>
					</Link>
					<motion.ul
						initial='hidden'
						animate='visible'
						variants={navContainer}
						className='flex md:order-2 items-center'>
						<motion.li whileHover={{ y: -3 }} variants={navItems}>
							<Search className='mr-5 cursor-pointer hover:stroke-space-cadet-300' />
						</motion.li>
						<motion.li whileHover={{ y: -3 }} variants={navItems}>
							<NavLink
								to='/profile'
								className={(navData) => {
									return navData.isActive
										? 'cursor-pointer text-space-cadet-300'
										: 'cursor-pointer hover:text-space-cadet-300';
								}}>
								<User />
							</NavLink>
						</motion.li>

						<motion.li
							whileHover={{ y: -3 }}
							variants={navItems}
							onClick={shoppingbagClickHandler}
							className='ml-5 cursor-pointer group'>
							<ShoppingBag className='group-hover:stroke-space-cadet-300' />
							{cartItems.length !== 0 && (
								<motion.div
									initial={{ scale: 0, x: 13, y: -10 }}
									animate={{ scale: 1 }}
									className='absolute rounded-full bg-h-gray-300 text-white text-xs px-1'>
									{cartItems.length}
								</motion.div>
							)}
						</motion.li>
						<motion.li variants={navItems}>
							<motion.button
								onClick={menuClickHandler}
								animate={{ rotate: showMenu ? 180 : 0 }}
								type='button'
								className='group inline-flex items-center p-2 ml-5 text-sm rounded-lg md:hidden hover:bg-isabelline focus:outline-none focus:ring-0'>
								<h2 className='sr-only'>Open main menu</h2>
								{showMenu ? (
									<X color='#22223b' />
								) : (
									<Menu color='#F2E9E4' />
								)}
							</motion.button>
						</motion.li>
					</motion.ul>
					<motion.div
						layout
						transition={{
							layout: {
								type: 'spring',
							},
						}}
						className={`${
							showMenu ? '' : 'hidden'
						} w-full md:flex md:w-auto md:order-1`}>
						<motion.ul
							initial='hidden'
							animate='visible'
							variants={navContainer}
							className='flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0'>
							<motion.li
								whileHover={{ y: -3 }}
								variants={navItems}>
								<NavLink
									to='/shop'
									onClick={menuClickHandler}
									className={(navData) => {
										return navData.isActive
											? 'block py-2 pr-4 pl-3 md:p-0 text-space-cadet-300'
											: 'block py-2 pr-4 pl-3 hover:text-space-cadet-300 md:p-0';
									}}>
									Shop
								</NavLink>
							</motion.li>
							<motion.li
								whileHover={{ y: -3 }}
								variants={navItems}>
								<NavLink
									to='/about-us'
									onClick={menuClickHandler}
									className={(navData) => {
										return navData.isActive
											? 'block py-2 pr-4 pl-3 md:p-0 text-space-cadet-300'
											: 'block py-2 pr-4 pl-3 hover:text-space-cadet-300 md:p-0';
									}}>
									About
								</NavLink>
							</motion.li>
							<motion.li
								whileHover={{ y: -3 }}
								variants={navItems}>
								<NavLink
									to='/contact'
									onClick={menuClickHandler}
									className={(navData) => {
										return navData.isActive
											? 'block py-2 pr-4 pl-3 md:p-0 text-space-cadet-300'
											: 'block py-2 pr-4 pl-3 hover:text-space-cadet-300 md:p-0';
									}}>
									Contact
								</NavLink>
							</motion.li>
						</motion.ul>
					</motion.div>
				</div>
			</nav>
		</Fragment>
	);
};

export default NavigationBar;
