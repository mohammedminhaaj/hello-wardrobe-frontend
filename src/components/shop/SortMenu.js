import { useMemo } from 'react';
import SortMenuItem from './SortMenuItem';

const SortMenu = (props) => {
	const sortItems = useMemo(
		() => [
			{ id: 1, name: 'Latest', sort: '-created_on' },
			{ id: 2, name: 'Lowest Price', sort: 'price' },
			{ id: 3, name: 'Highest Price', sort: '-price' },
		],
		[]
	);
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
