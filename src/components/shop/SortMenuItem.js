const SortMenuItem = (props) => {
	const clickHandler = () => {
		const queryObj = ['sort', props.sortItem.sort];
		props.setActiveFilters({ type: 'sort', payload: queryObj });
		props.closeSortHandler();
	};
	return (
		<li
			onClick={clickHandler}
			className='cursor-pointer hover:text-isabelline-100'>
			{props.sortItem.name}
		</li>
	);
};

export default SortMenuItem;
