import { motion } from 'framer-motion';
import CategoryItem from './CategoryItem';

const CategoryComponent = (props) => {
	return props.categoryData.map((item) => (
		<motion.div
			key={item.id}
			initial={{ opacity: 0, translateX: -50 }}
			animate={{ opacity: 1, translateX: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}>
			<CategoryItem
				activeFilters={props.activeFilters}
				setActiveFilters={props.setActiveFilters}
				categoryItem={item}
			/>
		</motion.div>
	));
};

export default CategoryComponent;
