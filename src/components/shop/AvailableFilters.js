import { Fragment } from 'react';
import FilterComponent from './FilterComponent';

const AvailableFilters = (props) => {
	return props.filterLabels.map((item) => {
		return (
			<Fragment key={item.id}>
				<FilterComponent
					activeFilters={props.activeFilters}
					setActiveFilters={props.setActiveFilters}
					currentLabel={item.name}
					filterData={props.availableFilters.filter(
						(value) => value.category.name === item.name
					)}
				/>
				<li>
					<hr />
				</li>
			</Fragment>
		);
	});
};

export default AvailableFilters;
