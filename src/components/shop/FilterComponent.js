import { ChevronDown } from 'react-feather';
import { Fragment, useState } from 'react';
import FilterItem from './FilterItem';
import { AnimatePresence, motion } from 'framer-motion';
import { filterItems } from './FilterSection';

const FilterComponent = (props) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<Fragment>
			<motion.header
				variants={filterItems}
				onClick={() => {
					setExpanded((previous) => !previous);
				}}
				className='flex justify-between cursor-pointer'>
				<p
					className={`capitalize ${
						expanded ? 'text-h-gray-200 font-semibold' : ''
					}`}>
					{props.currentLabel}
				</p>
				<motion.p
					className='my-auto'
					animate={{ rotate: expanded ? 180 : 0 }}>
					<ChevronDown size={16} />
				</motion.p>
			</motion.header>
			<AnimatePresence>
				{expanded && (
					<motion.ul
						key='accordian'
						initial='collapsed'
						animate='open'
						exit='collapsed'
						variants={{
							open: { opacity: 1, height: 'auto', marginTop: 12 },
							collapsed: { opacity: 0, height: 0, marginTop: 0 },
						}}
						transition={{
							duration: 0.5,
							ease: [0.04, 0.62, 0.23, 0.98],
						}}>
						{props.filterData.map((item) => {
							return (
								<FilterItem
									activeFilters={props.activeFilters}
									setActiveFilters={props.setActiveFilters}
									key={item.id}
									filterItem={item}
								/>
							);
						})}
					</motion.ul>
				)}
			</AnimatePresence>
		</Fragment>
	);
};

export default FilterComponent;
