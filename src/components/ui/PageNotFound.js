import { ReactComponent as NotFound } from '../../assets/svg/page-not-found.svg';

const PageNotFound = () => {
	return (
		<div className='text-center'>
			<NotFound className='w-64 h-64 m-auto' />
			<p className='text-space-cadet-300 font-medium'>
				The page you are looking for is missing
			</p>
		</div>
	);
};

export default PageNotFound;
