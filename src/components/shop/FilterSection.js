import { Plus } from 'react-feather';
const FilterSection = () => {
	return (
		<ul className='space-y-3'>
			<li>
				<p>Women</p>
			</li>
			<li>
				<p>Men</p>
			</li>
			<li>
				<p>Category 1000</p>
			</li>
			<li>
				<p>Category 2000</p>
			</li>
			<li>
				<p>Category 3000</p>
			</li>
			<hr />
			<li className='flex justify-between'>
				<p>Occasion</p>
				<Plus size={16} className='my-auto' />
			</li>
			<hr />
			<li className='flex justify-between'>
				<p>Color</p>
				<Plus size={16} className='my-auto' />
			</li>
			<hr />
			<li className='flex justify-between'>
				<p>Category</p>
				<Plus size={16} className='my-auto' />
			</li>
			<hr />
			<li className='flex justify-between'>
				<p>Size</p>
				<Plus size={16} className='my-auto' />
			</li>
		</ul>
	);
};

export default FilterSection;
