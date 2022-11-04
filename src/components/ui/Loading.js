import { Fragment } from 'react';
import { Loader } from 'react-feather';
import { ReactComponent as LoadingImage } from '../../assets/images/loading.svg';

const loadingTextList = [
	'Loading',
	'Ironing your clothes',
	'Looking for better clothes',
	'Cutting down the prices',
	'Improving your experience',
	'Cleaning your clothes',
	'Drying your clothes',
];

const Loading = () => {
	return (
		<Fragment>
			<div className='text-center'>
				<LoadingImage className='w-64 h-64 m-auto' />
			</div>
			<div className='flex text-space-cadet-300 font-medium justify-center align-middle gap-2'>
				<h2>
					{
						loadingTextList[
							Math.floor(Math.random() * loadingTextList.length)
						]
					}
					, please wait{' '}
				</h2>
				<Loader className='animate-spin' />
			</div>
		</Fragment>
	);
};

export default Loading;
