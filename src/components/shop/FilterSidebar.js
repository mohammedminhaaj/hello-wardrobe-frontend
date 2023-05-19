import { Fragment } from 'react';
import { CheckCircle, XCircle } from 'react-feather';
import Backdrop from '../ui/Backdrop';
import FilterSection from './FilterSection';
const FilterSidebar = (props) => {
	return (
		<Fragment>
			<Backdrop onClose={props.cancelHandler} />
			<aside className='fixed z-40 right-0 w-64 h-full p-5 bg-isabelline-100 rounded'>
				<h2 className='font-bold text-xl'>Filters</h2>
				<hr className='my-5 border-t-h-gray-100' />
				<div className='overflow-y-auto max-h-[65vh]'>
					<FilterSection
						filterData={props.filterData}
						activeFilters={props.activeFilters}
						setActiveFilters={props.setActiveFilters}
					/>
				</div>
				<div className='md:hidden fixed bottom-0 w-[216px] mb-5'>
					<div className='flex justify-around gap-3'>
						<button
							type='button'
							onClick={() => {
								props.setActiveFilters({ type: 'clear' });
							}}
							className='secondary-button'>
							<XCircle size={16} className='my-auto' />
							Clear
						</button>
						<button
							type='button'
							onClick={props.cancelHandler}
							className='primary-button'>
							<CheckCircle size={16} className='my-auto' />
							Done
						</button>
					</div>
				</div>
			</aside>
		</Fragment>
	);
};

export default FilterSidebar;
