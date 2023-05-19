import { Fragment } from 'react';
import LoaderIcon from './LoaderIcon';

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
			<LoaderIcon />
			<div className='mt-3 flex text-space-cadet-300 font-medium justify-center align-middle gap-2'>
				<h2>
					{
						loadingTextList[
							Math.floor(Math.random() * loadingTextList.length)
						]
					}
					, please wait{' '}
				</h2>
			</div>
		</Fragment>
	);
};

export default Loading;
