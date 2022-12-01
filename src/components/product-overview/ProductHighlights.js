import { memo } from 'react';

const ProductHighlights = (props) => {
	const highlights = props.highlights.split(';');
	return (
		<ul className='list-disc'>
			{highlights.map((item, index) => (
				<li key={index} className='font-thin ml-5'>
					{item}
				</li>
			))}
		</ul>
	);
};

export default memo(ProductHighlights);
