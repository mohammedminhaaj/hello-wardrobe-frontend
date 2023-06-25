import { motion } from 'framer-motion';
import CategoryItem from './CategoryItem';
import { filterItems } from './FilterSection';

const CategoryComponent = (props) => {
	return props.categoryData.map((item) => (
		<motion.ul key={item.id} variants={filterItems}>
			<CategoryItem
				activeFilters={props.activeFilters}
				setActiveFilters={props.setActiveFilters}
				categoryItem={item}
			/>
		</motion.ul>
	));
};

export default CategoryComponent;
