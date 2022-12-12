import { X } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { messageActions } from '../../store/message-slice';

const Toast = () => {
	const messages = useSelector((state) => state.message.messageArray);
	const dispatch = useDispatch();
	return (
		<section className='flex justify-center'>
			<div className='fixed w-5/6 md:w-1/3 top-16 md:top-20 z-50 text-white font-thin'>
				<div className='flex flex-col gap-2 flex-nowrap'>
					{messages.map((item, index) => (
						<div
							key={index}
							className='flex justify-between bg-silver-pink-300 rounded px-6 py-3 hover:opacity-70'>
							{item}
							<X
								onClick={() =>
									dispatch(
										messageActions.removeMessage(index)
									)
								}
								className='my-auto cursor-pointer'
								size={16}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Toast;
