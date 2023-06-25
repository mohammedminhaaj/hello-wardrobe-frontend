import AvailableFilters from './AvailableFilters';
import FilterComponent from './FilterComponent';
import { XCircle } from 'react-feather';
import CategoryComponent from './CategoryComponent';
import { motion } from 'framer-motion';

const filterContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export const filterItems = {
	hidden: { opacity: 0, x: -20 },
	show: { opacity: 1, x: 0 },
};

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
		<motion.ul
			initial='hidden'
			animate='show'
			variants={filterContainer}
			className='space-y-3'>
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
			<motion.li variants={filterItems} className='hidden md:block'>
				<motion.button
					whileHover={{scale:1.05}}
					whileTap={{scale: 0.95}}
					onClick={clearClickHandler}
					type='button'
					className='primary-button w-full'>
					<XCircle size={16} className='my-auto' />
					Clear Filters
				</motion.button>
			</motion.li>
		</motion.ul>
	);
};

export default FilterSection;
