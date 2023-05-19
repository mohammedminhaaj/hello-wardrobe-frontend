const SortMenuItem = (props) => {
	const clickHandler = () => {
		const queryObj = ['sort', props.sortItem.field_name];
		props.setActiveFilters({ type: 'sort', payload: queryObj });
		props.closeSortHandler();
	};

	return (
		<li
			onClick={clickHandler}
			className='cursor-pointer hover:text-isabelline-100'>
			{props.sortItem.display_name}
		</li>
	);
};

export default SortMenuItem;
