import { ReactComponent as ServerErrorImage } from '../../assets/images/server-down.svg';

const ServerError = (props) => {
	return (
		<div className='text-center'>
			<ServerErrorImage className='w-64 h-64 m-auto' />
			<div className='text-space-cadet-300 font-semibold'>
				<p>Oops! Something went wrong!</p>
				<p className='text-sm font-thin'>{props.error}</p>
			</div>
		</div>
	);
};

export default ServerError;
