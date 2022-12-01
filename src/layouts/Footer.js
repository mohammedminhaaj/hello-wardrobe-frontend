import { ArrowRight } from 'react-feather';
import { Link } from 'react-router-dom';
import { memo } from 'react';

const Footer = () => {
	return (
		<footer className='w-full bg-h-gray-200 text-isabelline-100 px-16 py-8'>
			<h2 className='sr-only'>Footer section</h2>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10 mb-10'>
				<ul>
					<li className='font-bold p-1'>Shop</li>
					<Link
						to='/shop?secondary=women'
						className='font-thin p-1 hover:text-space-cadet-300 flex group gap-2'>
						Women
						<ArrowRight
							size={13}
							className='hidden group-hover:block mt-2'
						/>
					</Link>
					<Link
						to='/shop?secondary=men'
						className='font-thin p-1 hover:text-space-cadet-300 flex group gap-2'>
						Men
						<ArrowRight
							size={13}
							className='hidden group-hover:block mt-2'
						/>
					</Link>
					<Link
						to='/shop?primary=category+1000'
						className='font-thin p-1 hover:text-space-cadet-300 flex group gap-2'>
						Category 1000
						<ArrowRight
							size={13}
							className='hidden group-hover:block mt-2'
						/>
					</Link>
					<Link
						to='/shop?primary=category+2000'
						className='font-thin p-1 hover:text-space-cadet-300 flex group gap-2'>
						Category 2000
						<ArrowRight
							size={13}
							className='hidden group-hover:block mt-2'
						/>
					</Link>
					<Link
						to='/shop?primary=category+3000'
						className='font-thin p-1 hover:text-space-cadet-300 flex group gap-2'>
						Category 3000
						<ArrowRight
							size={13}
							className='hidden group-hover:block mt-2'
						/>
					</Link>
				</ul>
				<ul>
					<li className='font-bold p-1'>Company</li>
					<li className='font-thin p-1 hover:text-space-cadet-300 flex group gap-2'>
						Who we are
						<ArrowRight
							size={13}
							className='hidden group-hover:block mt-2'
						/>
					</li>
					<li className='font-thin p-1 hover:text-space-cadet-300 flex group gap-2'>
						Careers
						<ArrowRight
							size={13}
							className='hidden group-hover:block mt-2'
						/>
					</li>
					<li className='font-thin p-1 hover:text-space-cadet-300 flex group gap-2'>
						Terms and Conditions
						<ArrowRight
							size={13}
							className='hidden group-hover:block mt-2'
						/>
					</li>
					<li className='font-thin p-1 hover:text-space-cadet-300 flex group gap-2'>
						Privacy
						<ArrowRight
							size={13}
							className='hidden group-hover:block mt-2'
						/>
					</li>
				</ul>
				<ul>
					<li className='font-bold p-1'>Account</li>
					<li className='font-thin p-1 hover:text-space-cadet-300 flex group gap-2'>
						Manage Account
						<ArrowRight
							size={13}
							className='hidden group-hover:block mt-2'
						/>
					</li>
					<li className='font-thin p-1 hover:text-space-cadet-300 flex group gap-2'>
						Returns and Exchanges
						<ArrowRight
							size={13}
							className='hidden group-hover:block mt-2'
						/>
					</li>
					<li className='font-thin p-1 hover:text-space-cadet-300 flex group gap-2'>
						Redeem a Gift Card
						<ArrowRight
							size={13}
							className='hidden group-hover:block mt-2'
						/>
					</li>
				</ul>
				<ul>
					<li className='font-bold p-1'>Connect</li>
					<li className='font-thin p-1 hover:text-space-cadet-300 flex group gap-2'>
						Contact Us
						<ArrowRight
							size={13}
							className='hidden group-hover:block mt-2'
						/>
					</li>
					<li className='font-thin p-1 hover:text-space-cadet-300 flex group gap-2'>
						Facebook
						<ArrowRight
							size={13}
							className='hidden group-hover:block mt-2'
						/>
					</li>
					<li className='font-thin p-1 hover:text-space-cadet-300 flex group gap-2'>
						Instagram
						<ArrowRight
							size={13}
							className='hidden group-hover:block mt-2'
						/>
					</li>
				</ul>
			</div>
			<div className='bg-silver-pink-100 text-space-cadet-300 p-5 rounded md:text-center'>
				<p className='font-bold'>Sign up for our newsletter</p>
				<label className='font-thin'>
					Latest deals and savings, sent to your inbox directly
				</label>
				<div className='mt-5'>
					<input
						className='bg-isabelline-100 active:ring-1 active:ring-isabelline-200 focus:outline-isabelline-300 mr-5 mb-5 px-3 py-1 rounded'
						placeholder='someone@example.com'
						type='email'
					/>
					<button
						type='button'
						className='text-white bg-independence-100 py-1 px-2 rounded hover:bg-independence-200 active:ring-1 active:ring-independence-300'>
						Sign up
					</button>
				</div>
			</div>
			<p className='mt-5 font-thin text-xs'>
				Copyright &#169; 2023 Hello Wardrobe
			</p>
		</footer>
	);
};

export default memo(Footer);
