import { Fragment, useState } from 'react';
import {User, ShoppingBag, Search} from 'react-feather'

const NavigationBar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const clickHandler = () => {
		setShowMenu(!showMenu);
	};

	return (
		<Fragment>
			<nav className='bg-slate-100 px-2 sm:px-4 py-2.5 fixed w-full z-20'>
				<div className='container flex flex-wrap justify-between items-center mx-auto'>
					<a href='/' className='flex items-center'>
						<span className='self-center text-xl font-semibold whitespace-nowrap'>
							Hello Wardrobe
						</span>
					</a>
					<div className='flex md:order-2 items-center'>
						<a>
							<Search className='mr-3 cursor-pointer focus:outline-none hover:border-b-2'/>
						</a>
						<a>
							<ShoppingBag className='cursor-pointer focus:outline-none hover:border-b-2'/>
						</a>
						<a>
							<User className='mx-3 cursor-pointer focus:outline-none hover:border-b-2'/>
						</a>
						{/* <button
							type='button'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0'>
							Get started
						</button> */}
						<button
							onClick={clickHandler}
							type='button'
							className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'>
							<span className='sr-only'>Open main menu</span>
							<svg
								className='w-6 h-6'
								aria-hidden='true'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
									clipRule='evenodd'></path>
							</svg>
						</button>
					</div>
					<div
						className={`${
							showMenu ? '' : 'hidden'
						} justify-between items-center w-full md:flex md:w-auto md:order-1`}>
						<ul className='flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0'>
							<li>
								<a
									href='#'
									className='block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-500 md:bg-transparent md:p-0'>
									Shop
								</a>
							</li>
							<li>
								<a
									href='#'
									className='block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-500 md:bg-transparent md:p-0'>
									About
								</a>
							</li>
							<li>
								<a
									href='#'
									className='block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-500 md:bg-transparent md:p-0'>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</Fragment>
	);
};

export default NavigationBar;
