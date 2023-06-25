import { memo } from 'react';
import { ChevronRight, Home } from 'react-feather';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const breadcrumbContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const breadcrumbItems = {
	hidden: { opacity: 0, x: -20 },
	visible: { opacity: 1, x: 0 },
};

const Breadcrumb = (props) => {
	return (
		<nav className='flex'>
			<motion.ol
				variants={breadcrumbContainer}
				initial='hidden'
				animate='visible'
				className='inline-flex items-center space-x-1 md:space-x-3'>
				<motion.li
					variants={breadcrumbItems}
					className='inline-flex items-center'
					whileHover={{ y: -3 }}>
					<Link
						to='/'
						className='inline-flex items-center text-sm font-medium text-gray-400 hover:text-space-cadet-300'>
						<Home size={16} className='mr-2' />
						Home
					</Link>
				</motion.li>
				{props.breadcrumbs &&
					props.breadcrumbs.map((item, index) => {
						return (
							<motion.li variants={breadcrumbItems} key={item.id}>
								<div className='flex items-center'>
									<ChevronRight
										size={16}
										className='stroke-space-cadet-300'
									/>
									{index === props.breadcrumbs.length - 1 ? (
										<p className='ml-1 text-sm font-medium text-space-cadet-300 md:ml-2'>
											{item.name}
										</p>
									) : (
										<motion.p
											className='ml-1 text-sm font-medium text-gray-400 hover:text-space-cadet-300 md:ml-2'
											whileHover={{ y: -3 }}>
											<Link to={item.linkTo}>
												{item.name}
											</Link>
										</motion.p>
									)}
								</div>
							</motion.li>
						);
					})}
			</motion.ol>
		</nav>
	);
};

export default memo(Breadcrumb);
