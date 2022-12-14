import { ReactComponent as Empty } from '../../assets/svg/no-data.svg';

const NoData = () => {
	return (
		<div className='text-center'>
			<Empty className='w-64 h-64 m-auto' />
			<p className='text-space-cadet-300 font-medium'>
				Nothing to show here
			</p>
		</div>
	);
};

export default NoData;
