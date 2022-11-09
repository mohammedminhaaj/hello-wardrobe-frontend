import { useEffect, useState } from 'react';
import { Check } from 'react-feather';

const CategoryItem = (props) => {
	const [isClicked, setIsClicked] = useState(
		props.activeFilters.find(
			(item) =>
				item[0] === props.categoryItem.category &&
				item[1] === props.categoryItem.name
		)
			? true
			: false
	);

	const { categoryItem, setActiveFilters, activeFilters } = props;

	useEffect(() => {
		const queryObj = [categoryItem.category, categoryItem.name];
		isClicked
			? setActiveFilters({ type: 'add', payload: queryObj })
			: setActiveFilters({ type: 'remove', payload: queryObj });
	}, [isClicked, categoryItem, setActiveFilters]);

	useEffect(() => {
		activeFilters.find(
			(item) =>
				item[0] === categoryItem.category &&
				item[1] === categoryItem.name
		)
			? setIsClicked(true)
			: setIsClicked(false);
	}, [activeFilters, categoryItem]);

	const categoryClickHandler = () => {
		setIsClicked((previous) => !previous);
	};

	return (
		<li>
			<p
				onClick={categoryClickHandler}
				className={`${
					isClicked ? 'font-semibold text-h-gray-200' : ''
				} capitalize cursor-pointer flex gap-1`}>
				{isClicked ? <Check size={16} className='my-auto' /> : ''}
				{props.categoryItem.name}
			</p>
		</li>
	);
};

export default CategoryItem;
