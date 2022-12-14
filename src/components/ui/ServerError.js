import { ReactComponent as ServerErrorImage } from '../../assets/svg/server-down.svg';

const ServerError = (props) => {
	return (
		<div className='text-center'>
			<ServerErrorImage className='w-64 h-64 m-auto' />
			<div className='text-space-cadet-300 font-medium'>
				<p>Oops! Something went wrong!</p>
				<p className='text-xs font-thin'>{props.error}</p>
			</div>
		</div>
	);
};

export default ServerError;
