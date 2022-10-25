import FilterSection from './FilterSection';
const FilterSidebar = (props) => {
	return (
		<div className='fixed top-0 left-0 right-0 bottom-0 z-30 w-full h-auto backdrop-blur-sm'>
			<aside className='fixed right-0 w-64 h-full p-5 bg-stone-100 rounded'>
                <h1 className='font-bold text-xl'>Filter</h1>
                <hr className='my-5'/>
				<div className='overflow-y-auto mb-5'>
					<FilterSection />
				</div>
				<div className='fixed bottom-0 w-[216px] mb-5'>
					<div className='flex flex-row-reverse gap-3'>
						<button className='bg-stone-300 py-2 px-3 rounded hover:bg-stone-400 active:ring-1 active:ring-stone-400'>
							Filter
						</button>
						<button
							onClick={props.cancelHandler}
							className='bg-stone-200 py-2 px-3 rounded hover:bg-slate-300 active:ring-1 active:ring-stone-300'>
							Cancel
						</button>
					</div>
				</div>
			</aside>
		</div>
	);
};

export default FilterSidebar;
