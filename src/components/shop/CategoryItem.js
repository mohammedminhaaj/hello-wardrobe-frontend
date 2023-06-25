import { useEffect, useState } from 'react';
import { Check } from 'react-feather';
import { AnimatePresence, motion } from 'framer-motion';

const items = {
	hidden: { opacity: 0, x: -20 },
	show: { opacity: 1, x: 0 },
	hover: { scale: 1.15, originX: 0 },
};

const CategoryItem = (props) => {
	const [isClicked, setIsClicked] = useState(
		props.activeFilters.find(
			(item) =>
				item[0] === props.categoryItem.category &&
				item[1] === props.categoryItem.display_name
		)
			? true
			: false
	);

	const { categoryItem, setActiveFilters, activeFilters } = props;

	useEffect(() => {
		const queryObj = [categoryItem.category, categoryItem.display_name];
		isClicked
			? setActiveFilters({ type: 'add', payload: queryObj })
			: setActiveFilters({ type: 'remove', payload: queryObj });
	}, [isClicked, categoryItem, setActiveFilters]);

	useEffect(() => {
		activeFilters.find(
			(item) =>
				item[0] === categoryItem.category &&
				item[1] === categoryItem.display_name
		)
			? setIsClicked(true)
			: setIsClicked(false);
	}, [activeFilters, categoryItem]);

	const categoryClickHandler = () => {
		setIsClicked((previous) => !previous);
	};

	return (
		<motion.li whileHover='hover' variants={items}>
			<p
				onClick={categoryClickHandler}
				className={`${
					isClicked ? 'font-semibold text-h-gray-200' : ''
				} capitalize cursor-pointer flex gap-1`}>
				<AnimatePresence mode='popLayout'>
					{isClicked && (
						<motion.span
							key='checked'
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -20 }}
							transition={{
								type: 'tween',
								duration: 0.1,
							}}
							className='my-auto'>
							<Check size={16} />
						</motion.span>
					)}
				</AnimatePresence>

				{props.categoryItem.display_name}
			</p>
		</motion.li>
	);
};

export default CategoryItem;
