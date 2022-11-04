import FilterSection from './FilterSection';
const FilterSidebar = (props) => {
	return (
		<div className='fixed top-0 left-0 right-0 bottom-0 z-30 w-full h-auto backdrop-blur-sm'>
			<aside className='fixed right-0 w-64 h-full p-5 bg-isabelline-100 rounded'>
				<h2 className='font-bold text-xl'>Filters</h2>
				<hr className='my-5 border-t border-t-space-cadet-300' />
				<div className='overflow-y-auto mb-5'>
					<FilterSection />
				</div>
				<div className='fixed bottom-0 w-[216px] mb-5'>
					<div className='flex flex-row-reverse gap-3'>
						<button type='button' className='primary-button'>
							Filter
						</button>
						<button
							type='button'
							onClick={props.cancelHandler}
							className='secondary-button'>
							Cancel
						</button>
					</div>
				</div>
			</aside>
		</div>
	);
};

export default FilterSidebar;
