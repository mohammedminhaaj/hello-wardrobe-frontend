import CategoryItem from './CategoryItem';

const CategoryComponent = (props) => {
	return props.categoryData.map((item) => {
		return (
			<CategoryItem
                key={item.id}
				activeFilters={props.activeFilters}
				setActiveFilters={props.setActiveFilters}
				categoryItem={item}
			/>
		);
	});
};

export default CategoryComponent;
