import { Fragment } from 'react';
import FilterComponent from './FilterComponent';

const AvailableFilters = (props) => {
	const filterLabels = [
		...new Set(props.availableFilters.map((item) => item.category)),
	];

	return filterLabels.map((item, index) => {
		return (
			<Fragment key={index}>
				<FilterComponent
					activeFilters={props.activeFilters}
					setActiveFilters={props.setActiveFilters}
					currentLabel={item}
					filterData={props.availableFilters.filter(
						(value) => value.category === item
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
