import { Fragment } from 'react';
import FilterComponent from './FilterComponent';

const AvailableFilters = (props) => {
	return props.filterLabels.map((item) => {
		return (
			<Fragment key={item.id}>
				<FilterComponent
					activeFilters={props.activeFilters}
					setActiveFilters={props.setActiveFilters}
					currentLabel={item.display_name}
					filterData={props.availableFilters.filter(
						(value) => value.category.display_name === item.display_name
					)}
				/>
				<li>
					<hr className='border-t-h-gray-100 md:border-t-inherit' />
				</li>
			</Fragment>
		);
	});
};

export default AvailableFilters;
