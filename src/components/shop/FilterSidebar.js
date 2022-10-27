import FilterSection from './FilterSection';
const FilterSidebar = (props) => {
	return (
		<div className='fixed top-0 left-0 right-0 bottom-0 z-30 w-full h-auto backdrop-blur-sm'>
			<aside className='fixed right-0 w-64 h-full p-5 bg-isabelline-100 rounded'>
                <h1 className='font-bold text-xl'>Filter</h1>
                <hr className='my-5'/>
				<div className='overflow-y-auto mb-5'>
					<FilterSection />
				</div>
				<div className='fixed bottom-0 w-[216px] mb-5'>
					<div className='flex flex-row-reverse gap-3'>
						<button className='bg-independence-100 py-2 px-3 rounded hover:bg-independence-200 active:ring-1 active:ring-independence-300'>
							Filter
						</button>
						<button
							onClick={props.cancelHandler}
							className='bg-h-gray-100 py-2 px-3 rounded hover:bg-h-gray-200 active:ring-1 active:ring-h-gray-300'>
							Cancel
						</button>
					</div>
				</div>
			</aside>
		</div>
	);
};

export default FilterSidebar;
