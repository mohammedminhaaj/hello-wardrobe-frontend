import { Fragment, useState } from 'react';
import { User, ShoppingBag, Search, Menu } from 'react-feather';
import { Link, NavLink } from 'react-router-dom';

const NavigationBar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const clickHandler = () => {
		setShowMenu((previous) => !previous);
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
					<div className='flex md:order-2 items-center'>
						<Search className='mr-5 cursor-pointer hover:stroke-space-cadet-300' />

						<User className='cursor-pointer hover:stroke-space-cadet-300' />

						<ShoppingBag className='ml-5 cursor-pointer hover:stroke-space-cadet-300' />

						<button
							onClick={clickHandler}
							type='button'
							className='group inline-flex items-center p-2 ml-5 text-sm rounded-lg md:hidden hover:bg-isabelline focus:outline-none focus:ring-1 focus:ring-'>
							<h2 className='sr-only'>Open main menu</h2>
							<Menu color={showMenu ? '#22223b' : '#F2E9E4'} />
						</button>
					</div>
					<div
						className={`${
							showMenu ? '' : 'hidden'
						} justify-between items-center w-full md:flex md:w-auto md:order-1`}>
						<ul className='flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0'>
							<li>
								<NavLink
									to='/shop'
									onClick={clickHandler}
									className={(navData) => {
										return navData.isActive
											? 'block py-2 pr-4 pl-3 md:p-0 text-space-cadet-300'
											: 'block py-2 pr-4 pl-3 hover:text-space-cadet-300 md:p-0';
									}}>
									Shop
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/about-us'
									onClick={clickHandler}
									className={(navData) => {
										return navData.isActive
											? 'block py-2 pr-4 pl-3 md:p-0 text-space-cadet-300'
											: 'block py-2 pr-4 pl-3 hover:text-space-cadet-300 md:p-0';
									}}>
									About
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/contact'
									onClick={clickHandler}
									className={(navData) => {
										return navData.isActive
											? 'block py-2 pr-4 pl-3 md:p-0 text-space-cadet-300'
											: 'block py-2 pr-4 pl-3 hover:text-space-cadet-300 md:p-0';
									}}>
									Contact
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</Fragment>
	);
};

export default NavigationBar;
