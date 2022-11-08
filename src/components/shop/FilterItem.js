const FilterItem = (props) => {
	const changeHandler = (event) => {
		const queryObj = [props.filterItem.category, props.filterItem.name];
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
				id={`${props.filterItem.name}_${props.filterItem.id}`}
				type='checkbox'
				className='accent-h-gray-100'
			/>
			<label
				htmlFor={`${props.filterItem.name}_${props.filterItem.id}`}
				className='ml-2 capitalize'>
				{props.filterItem.name}
			</label>
		</div>
	);
};

export default FilterItem;
