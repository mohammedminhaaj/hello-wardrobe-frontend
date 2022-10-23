import { ChevronRight, Home } from 'react-feather';

const Breadcrumb = (props) => {
	return (
		<nav className='flex'>
			<ol className='inline-flex items-center space-x-1 md:space-x-3'>
				<li className='inline-flex items-center'>
					<a
						href='/'
						className='inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900'>
						<Home size={16} className='mr-2' />
						Home
					</a>
				</li>
				{props.breadcrumbs &&
					props.breadcrumbs.map((item, index) => {
						return (
							<li key={item.id}>
								<div className='flex items-center'>
									<ChevronRight
										size={16}
										className='text-gray-500'
									/>
									{index === props.breadcrumbs.length - 1 ? (
										<p className='ml-1 text-sm font-medium text-gray-900 md:ml-2'>
											{item.name}
										</p>
									) : (
										<a
											href={item.linkTo}
											className='ml-1 text-sm font-medium text-gray-500 hover:text-gray-900 md:ml-2'>
											{item.name}
										</a>
									)}
								</div>
							</li>
						);
					})}
			</ol>
		</nav>
	);
};

export default Breadcrumb;
