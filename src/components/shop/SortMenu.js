import SortMenuItem from './SortMenuItem';

const SortMenu = (props) => {
	const { sortData: sortItems } = props;
	return (
		<ul className='space-y-2'>
			{sortItems.map((item) => {
				return (
					<SortMenuItem
						key={item.id}
						closeSortHandler={props.closeSortHandler}
						setActiveFilters={props.setActiveFilters}
						sortItem={item}
					/>
				);
			})}
		</ul>
	);
};
export default SortMenu;
