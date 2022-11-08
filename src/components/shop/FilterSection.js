import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import AvailableFilters from './AvailableFilters';
import FilterComponent from './FilterComponent';

const FilterSection = (props) => {
	const [filterData, setFilterData] = useState({
		filter_details: [],
		size_details: [],
		message: 'Loading, please wait...',
	});

	useEffect(() => {
		axios
			.get('/api/product/filter-details/')
			.then((response) => setFilterData(response.data))
			.catch(() =>
				setFilterData({
					filter_details: [],
					size_details: [],
					message: 'Failed to load filter details',
				})
			);
	}, []);

	return (
		<ul className='space-y-3'>
			<li>
				<p>Women</p>
			</li>
			<li>
				<p>Men</p>
			</li>
			<li>
				<p>Category 1000</p>
			</li>
			<li>
				<p>Category 2000</p>
			</li>
			<li>
				<p>Category 3000</p>
			</li>
			<li>
				<hr />
			</li>
			{!filterData.filter_details.length ||
			!filterData.size_details.length ? (
				<p>{filterData.message}</p>
			) : (
				<Fragment>
					<FilterComponent
						activeFilters={props.activeFilters}
						setActiveFilters={props.setActiveFilters}
						currentLabel='size'
						filterData={filterData.size_details}
					/>
					<li>
						<hr />
					</li>
					<AvailableFilters
						activeFilters={props.activeFilters}
						setActiveFilters={props.setActiveFilters}
						availableFilters={filterData.filter_details}
					/>
				</Fragment>
			)}
		</ul>
	);
};

export default FilterSection;
