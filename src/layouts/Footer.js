const Footer = () => {
	return (
		<footer className='w-full bg-slate-200 p-16'>
			<span className='sr-only'>Footer section</span>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10 mb-10'>
				<ul>
					<li className='font-bold p-1'>Shop</li>
					<li className='font-thin p-1'>Women</li>
					<li className='font-thin p-1'>Men</li>
					<li className='font-thin p-1'>Category 1000</li>
					<li className='font-thin p-1'>Category 2000</li>
					<li className='font-thin p-1'>Category 3000</li>
				</ul>
				<ul>
					<li className='font-bold p-1'>Company</li>
					<li className='font-thin p-1'>Who we are</li>
					<li className='font-thin p-1'>Careers</li>
					<li className='font-thin p-1'>Terms and Conditions</li>
					<li className='font-thin p-1'>Privacy</li>
				</ul>
				<ul>
					<li className='font-bold p-1'>Account</li>
					<li className='font-thin p-1'>Manage Account</li>
					<li className='font-thin p-1'>Returns and Exchanges</li>
					<li className='font-thin p-1'>Redeem a Gift Card</li>
				</ul>
				<ul>
					<li className='font-bold p-1'>Connect</li>
					<li className='font-thin p-1'>Contact Us</li>
					<li className='font-thin p-1'>Facebook</li>
					<li className='font-thin p-1'>Instagram</li>
				</ul>
			</div>
			<div className='bg-slate-300 p-5 rounded md:text-center'>
				<p className='font-bold'>Sign up for our newsletter</p>
				<label className='font-thin'>
					The latest deals and savings, sent to your inbox directly
				</label>
				<div className='mt-5'>
					<input
						className='mr-5 mb-5 px-3 py-1 rounded'
						placeholder='someone@example.com'
						type='email'
					/>
					<button className='bg-slate-400 rounded px-3 py-1 hover:bg-slate-500 cursor-pointer active:ring-2 ring-slate-700'>
						Sign up
					</button>
				</div>
			</div>
            <hr/>
            <p className="mt-5 font-thin text-xs">Copyright &#169; 2023 Hello Wardrobe</p>
		</footer>
	);
};

export default Footer;
