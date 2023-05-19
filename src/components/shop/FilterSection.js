import AvailableFilters from './AvailableFilters';
import FilterComponent from './FilterComponent';
import { XCircle } from 'react-feather';
import CategoryComponent from './CategoryComponent';

const FilterSection = (props) => {
	const clearClickHandler = () => {
		props.setActiveFilters({ type: 'clear' });
	};

	const filterData = props.filterData;

	return !filterData.filter_details.length ||
		!filterData.size_details.length ||
		!filterData.primary_category_details.length ||
		!filterData.secondary_category_details.length ? (
		<p>{filterData.message}</p>
	) : (
		<ul className='space-y-3'>
			<CategoryComponent
				activeFilters={props.activeFilters}
				setActiveFilters={props.setActiveFilters}
				categoryData={filterData.secondary_category_details}
			/>
			<CategoryComponent
				activeFilters={props.activeFilters}
				setActiveFilters={props.setActiveFilters}
				categoryData={filterData.primary_category_details}
			/>
			<li>
				<hr className='border-t-h-gray-100 md:border-t-inherit' />
			</li>
			<FilterComponent
				activeFilters={props.activeFilters}
				setActiveFilters={props.setActiveFilters}
				currentLabel='size'
				filterData={filterData.size_details}
			/>
			<li>
				<hr className='border-t-h-gray-100 md:border-t-inherit' />
			</li>
			<AvailableFilters
				activeFilters={props.activeFilters}
				setActiveFilters={props.setActiveFilters}
				filterLabels={filterData.filter_labels}
				availableFilters={filterData.filter_details}
			/>
			<li className='hidden md:block'>
				<button
					onClick={clearClickHandler}
					type='button'
					className='primary-button w-full'>
					<XCircle size={16} className='my-auto' />
					Clear Filters
				</button>
			</li>
		</ul>
	);
};

export default FilterSection;
