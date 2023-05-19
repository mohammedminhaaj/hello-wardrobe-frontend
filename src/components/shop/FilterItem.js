import { useRef } from 'react';

const FilterItem = (props) => {
	const filterCheckbox = useRef();

	if (filterCheckbox.current) {
		if (
			props.activeFilters.find(
				(item) =>
					item[0] === props.filterItem.category.display_name &&
					item[1] === props.filterItem.display_name
			)
		)
			filterCheckbox.current.checked = true;
		else filterCheckbox.current.checked = false;
	}

	const changeHandler = (event) => {
		const queryObj = [
			props.filterItem.category.display_name,
			props.filterItem.display_name,
		];
		if (event.target.checked) {
			props.setActiveFilters({ type: 'add', payload: queryObj });
		} else {
			props.setActiveFilters({ type: 'remove', payload: queryObj });
		}
	};

	return (
		<div className='block'>
			<input
				onChange={changeHandler}
				id={`${props.filterItem.display_name}_${props.filterItem.id}`}
				type='checkbox'
				className='accent-h-gray-100 cursor-pointer'
				ref={filterCheckbox}
			/>
			<label
				htmlFor={`${props.filterItem.display_name}_${props.filterItem.id}`}
				className='ml-2 capitalize cursor-pointer'>
				{props.filterItem.display_name}
			</label>
		</div>
	);
};

export default FilterItem;
