import { ChevronDown, ChevronUp } from 'react-feather';
import { Fragment, useState } from 'react';
import FilterItem from './FilterItem';

const FilterComponent = (props) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<Fragment>
			<li
				onClick={() => {
					setExpanded((previous) => !previous);
				}}
				className='flex justify-between cursor-pointer'>
				{!expanded ? (
					<Fragment>
						<p className='capitalize'>{props.currentLabel}</p>
						<ChevronDown size={16} className='my-auto' />
					</Fragment>
				) : (
					<Fragment>
						<p className='font-semibold capitalize text-h-gray-200'>
							{props.currentLabel}
						</p>
						<ChevronUp
							size={16}
							className='my-auto text-h-gray-200'
						/>
					</Fragment>
				)}
			</li>
			<li className={`${!expanded ? 'hidden' : ''}`}>
				{props.filterData.map((item) => {
					return (
						<FilterItem
							activeFilters={props.activeFilters}
							setActiveFilters={props.setActiveFilters}
							key={item.id}
							filterItem={item}
						/>
					);
				})}
			</li>
		</Fragment>
	);
};

export default FilterComponent;
